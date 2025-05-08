# react redux 전역상태

> react는 컴포넌트 즉 UI의 다누이로 개발을 하면서  상태를 관리하게 되는데
> Flux 단방향 데이터의 흐름을 가지고 있고
> 상태가 여러개의 컴포넌트에서 사용이 되는경우 상태간의 의존성이 생기는 경우가 많아지면 복잡도가 올라간다
> props drilling의 문제를 해결하기위해서 전역 상태로 redux 를 사용하는것 
> 중앙 집중식 데이터의 저장소를 만들어섯 상태를 관리하는것


## redux
> facebook(meta) flux architecture 보고 만든것.
> 단방향 데이터 흐름 가지고 있다.
> dispatch -> store -> view

> 모든 상태를 하나의 저장공간에 저장을 하고
> 상태변환은 디스페처를 호출해서 액션을 발생시키고 리듀서가 캐치 리듀서가 액션을 가지고 로직을 호출해서 반환값을 가지고 스토어 즉 상태 업데이트
> 리듀서는 순수 함수 외부에 있는 값의 의존성이 없는 함수 전달받은 값을 함수 내부에서 연산을 목적으로 반환값으로 반환
> 목적은 전역 상태의 관리의 목적을 가지고 있다.

## react-redux
> redux 는 많은 곳에서 사용을 했는데 react 사용할때 가장 효과적이었다.
> react-redux 공식문서가 탄생 라이브러리 탄생
> redux를 사용할때 react 에서 유용한 hook과 함수
> 저장소 생생 등 react 에서 redux를 사용할때 함수를 제공해준다.


### redux의 주요 속성
1. action
2. dispatch
3. reducer
4. store

dispatch -> reducer(action) -> store state update

### redux 문법

```sh
npm i redux react-redux
```

```js
// redux는 저장소를 만드는 내용에서 사용되는 라이브러리
// react-redux 는 생성한 저장소를 관리할때 최적화, 효과적인 hook을 제공하는 라이브러리
// redux는 상태를 하나의 공간에 저장한다. store 라는 객체 안에 데이터를 모두 저장한다.

// 저장소 생성 (전역 상태를 저장할 공간)
import {createStore} from 'redux';
// createStore 저장소를 생성하는 함수 ===> reducer 함수가 필요하다
// reducer 함수를매개변수로 전달
const store = createStore(reducer);

// 상수수
const initState = {count : 0};
const Increment = 'increment';
const Decrement = 'decrement';

// reducer
const reducer = (state = initState, action) => {
    const {type, payload} = action;
    switch(type) {
        case Increment : return {...state, count : state.count + 1}
    }
}

// const result = reducer(state, {type : Increment})
// this.state

// dispatch
// useDispatch updates the state in store throuth action
// useSelector can inquiry and select the state if the state value changes then it will render the component
import {useDispatch, useSelector} from 'react-redux';

const App = () => {
    // 초기화된 저장소의 상태를 업데이트할수 있는 함수를 반환
    const dispatch = useDispatch(); 
    // callback 으로 전달한 함수의 반환값을 useSelector 가 내부적으로 반환해서 count 변수에 할당
    const count = useSelector(state => state.count);
    // (state => state.count); returns the value of state.count shortcut for returning the value directly
    // 전달한 콜백함수의 매개변수로 상태를 할당해주고 콜백함수에서 반환한 값으로로 useSelector 반환을 한다 count변수에 상태값에 있는 count 할당 => 이후부터 count 를 주시하게 된다다
    return (<div>
        <button onClick={() => dispatch({type : Increment})} >증가</button>
    </div>)
}
```

### 무분결한 전역상태는 피해서 작성

전역상태는 중요한 데이터만 저장한다 아니면 상태로 관리한다