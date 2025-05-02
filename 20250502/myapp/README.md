# React hook Context, Memo

1. context : react 는 단방향 데이터의 흐름으로 설계가 되었있다. 플럭스 패턴 부모 컴포넌트에서 자식 컴포넌트로 props 의 값을 전달해서 사용한다. 프로젝트늬 규모다 커지게되면 props 드릴링을 해도 개발은 가능을 하지만 협업이 불가능 가독성 이슈 프로젝트에 문제가 없다. 하지만 협업의 원활함을 헤치기 때문에 피해야한다. props drilling 피하기위해서 사용할수 있는 react hook 상태를 공유할수 있도록 전달 해준다.

``` js
// props drilling A 가 데이터를 필요하면 C 부터 C 가 필요없는 데이터를 천달해해한다
const A = (props) => {return <>{props.name}</>}
const B = (props) => {return <A>{props.name}</A>}
const c = (props) => {return <B>{props.name}</B>}


const app = () => {
    const [name, setName] = useState('');
    return (
        <C name={name} age uid upw>
        </C>
    )
}

```
## Context 문법
```js
// Login 의 자식 컴포넌트에서 상태변수를 공유해야하는 내용
// 3개의 자식 컴포넌트 A B C 의 컴포넌트에 값을 전달해야해서 props 드릴링이 발생 이것을 방지해보자 context 를 사용해서

// Login -> C -> B -> A (name 상태변수 필요하다)

// 상태변수를 저장할 저장소 공유하기 위한 값을 저장할 공간

import {createContext} from 'react';

// 호출하면서 객체의 저장소를 만든다 
// 저장공간을 만들고 사용하는 영역을 지정정
// 플럭스 상태 공유 부모를 기준으로 자식 컴포넌트들에세 저장공간의 주소르 주입

const Store = createContext();



import Store from '.Store.js'
const Login = () => {
    // Login 부모 컴포넌트에서 provide으로 주소를 주입
    // 공유하고 싶은 값
    // 부모 컴포넌트의 값을 자식들이 props 로 전달받아서 사용하지않고 저장소의 주소에 접근해서 사용할수 잇도록
    const [name, setName] = useState('soon');
    const obj = {
        name, setName
    }

    return (
        // value key 로 값을 천달해야한다 value 값 특정으로 가지고 있다
        <Store.Provider value={obj}>
        <C />
        </Store.Provider>
    )
}

const C = () => {
    return<B/>
}
const B = () => {
    return <A/>
}

import {useContext} from 'react';
import Store from './Store.js'

const A = () => {
    const obj = useContext(Store);
}

```


2. Memo : react 의 상태를 관리할때 훅은 props 부모 컴포넌트의 전달값을 가지고 다시 리렌더링을 할때 불필요한 리렌더링을 방지하기위해서 사용되는 hook 메모이제이션 기법을 사용해서 불필요한 렌더링을 방지하는 hook을 젣공한다. props 가 바뀌지 않으면 컴포넌ㄴ트를 다시 렌더링하는 구조를 방지해준다.


```js

const Login = (props) => {
    return <div>{props.name}</div>
    }

const App = () => {
    const [name, setName] = useState('soon');
    const [count, setCount] = useState(0)

    // setCount 가 호출되어서 부모의 컴포넌트의 생태변수가 변경되ㅕㅁㄴ 자식 컴포넌트는 모두 리렌더링된다
    // Login 자식 컴포넌트가 리렌더링 되는 시기는 name 의 값이 변경되었을때

    return <Login name={name}/>
    
}




```


### memo 의 문법 
> 컴포넌트가 리렌더링이 되어야하는 때에만 리렌더링
> memo 가 내부적으로 조건문을 가지고 렌더링 이전에 검증한뒤에 렌더링을 호출한다
> 모모에제이션 기법을 사용하늗 hook

```js

import {memo, useMemo} from 'react';
// const Child = ({name}) => {
//     return (
//         <>{name}</>
//     )
// }

// memo 는 전달한 함수의 값에서 사용하는 변수의 값이 변경되었을떄만 리렝ㄴ더링을 호출한다
// 콜백함수 호출한 시기를 조건문으로 결정해주는 역활을 해준다. 이전 컴포넌트의 내용을 저장하고 값의 변화가 없으면 연산을 한변더 즉 렌더링을 하지않고 이전의 내용을 바로 보여주고 값이 변화해서 리렌더링이 되어야하면 다시 연산해서 리렌더링을 해주는것것
const Child = memo(({name}) => {

    const [count, setCount] = useState(3);
    const [count2, setCount2] = useState(5);


    // 함수가 호출되소 반환되 값을 캐싱 캐싱해둔 데이터는 언제 바뀌느냐?
    // 의존성 배열의 값이 변경되었을때
    // 연산 최적화
    const countValue = useMemo(() => {
        return count + count2;
    }
    return (
        <>{name}</>
    ))
    // use Memo 연산된 값이 변환하면 캐싱을 해서 관리
    // 기능 함수의 로직이 변환 useCallback 함수의 내용 기능 함수 값이 변화했지
    }, [count, count2])
    const Parent = () => {
        const [name, setName] = useState('soon');
        const [count, setCount] = useState(0)
        return(
            <Child name={name}>
        )
    }
```
```js
// 추가적으로 메모이제이션 기법을 컴포넌트에 사용을 할때 memo 를 사용해서 리렌더링을 방지지


// 값의 비교를 하고 캐싱을 할지 말지 결정을 하기때문에 주소를 새롭게 생성해서 전달하는 방식을 피해서 사용해야한다


const a = {};
const b = {};
const c = 1;
const d = 1;

c === d    // true

console.log(a === b);  X 객체 주소 메모리에 다루기때문에에
console.log(a == b); V




```

게시글의 컨탠츠를 memo로 사용 부모 컴포넌트 즉 게시글 게시글의 배열이 상태변수

글을 추가하면 배열의 값이 변화하고 추가되는 컴포넌트만 리렌더링

// 1 안녕 이렇게 작성하고 버튼 클릭하면 1 번 게시글이 수정되는것
중간글을 수정하면 그 수정되는 글만 리렌더링


callback, 참조 타입, 원시 타입