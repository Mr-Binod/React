# redux thunk middleware
> redux는 순수함수를 사용하는 철학을 가지고 있어서
> redux에서 비동기 로직을  직접 작성하지않고 미들웨어로 외부로 나눠서 작성해서 사용한다.
> 미들웨어 추사를 thunk하게되면 api 요청에대한 함수 로직은 thunk 로 미들웨어 추가가 가능하다.

## redux 의 문제점
> action 객체를 전달한다
> 비동기 로직을 작성할때 

```js
dispatch({})
const reducer = () => {
    switch() {
        case :
        return
    }
}
    
dispatch({})  // thunk를 미들웨어로 추가하면
// dispatch에 전달한 매개변수의 타입에 따라 리듀서 호출인디 액션 함수 호출인지
const dispatch = (object) => {
    if(typeof action === 'object') {

    }else if(typeof action === 'function') {

    }
}


// action 생성자
// for getting parameter we create function inside function
const actionfn = (a) => (dispatch, getState) => {
    // getState 현재 상태값값
    // 비동기 처리 로직
    const data = axios({url : `http://localhost:3000/board/${a}`})
    // 상태 전환
    dispatch({type : '', payload : data})
}

// 잠시 지연하는 용도의 래핑
dispatch(actionfn(1))

- 이런 식으로 실행 된다
// dispatch((dispatch, getState) => {
//     // getState 현재 상태값값
//     // 비동기 처리 로직
//     const data = axios({url : ''})
//     // 상태 전환
//     dispatch({type : '', payload : data})
// })
```

### redux thunk 등장
> redux thunk 는 javascript 프로그래밍 개넘
> thunk 는 어떤 로직 즉 표현을 지연한다. 로직을 나중에 실행시키기 위해서 
> 함수로 래핑해서 지연시키는것

### thunk 등작
> dispatch 에 전달 된 매개변수가 함수이면 함수를 실행
> 실행된 함수에 매개변수로 dispatch getState 두가지를 인자의 값으로 전달한다.


```js
// thunk 를 사용하기 이전
dispatch({type : 'Login'})

// action 생성자
dispatch((dispatch, getState) => {
    // 비동기 로직 처리
    dispatch({type : 'Login'})
})

// 상태의 변화를 잠시 뒤로 미룬다 비동기로직 처리한 뒤에 실행하기위해서 지연시키는것
// thunk main property is to process the dispatch after all the logic has been completed processed action function will be processed first and then the dispatch

```

### thunk 의 목적
1. api 의 로직을 비동적으로 호출한 이후에 스토어 업데이트
2. 액션 생성자 함수를 미들웨어로 추가해서 실행
3. 비동기로 로직과 동기 로직의 구분을 지어서 관리할수 있다.

### thunk 문법
```js

npm i redux-thunk

// store.js

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'


// thunk
// 내부 로직에 미들웨러를 추라하기위해서 스토러 생성할때 매개변수로 미들웨어를 전달해준다
// applyMiddleware({dispatch, getState => action => ({dispatch, getState} => {})}) function processes in this way
const store = createStore(reducer, applyMiddleware(thunk))

// action create
import axios from 'axios'

// 유저의 프로필 정보를 요청하는 로직
export const getUserAction = (nick) => async ({dispatch, getState}) => {
    // 전엿 상태 업데이트
    const {data} = await axios.get(`http://localhost:3000/userinfo?nick=${nick}`)
    dispatch({type: 'userinfo', payload : data})
} 

// 컴포넌트에서 호출

import {useDispatch} from 'react-redux'
import {getUserAction} from './action/userAction.js';

const App = () => {
    const dispatch = useDispatch();
    const handler = () => {
        dispatch(getUserAction('soon'))
        const dispatch = (action) => {
            if(typeof action === 'object'){
                // 상태 업데이트 리듀서 실행되고 상태 업데이트

            }else if (typeof action === 'function') {
                action(dispatch, getState)
            }
        }
    }
    return (<button onClick={handler}>프로필 조회</button>)
}
```

### todo list 추가 삭제



```sh

npm i express cors mysql2 sequelize

npm i redux react-redux axios redux-thunk styled-components 

src
    - api   # api오청 로직의 코드의 내용
        - Todo.js
    - actions   # action 생성자 함수들 
        - todoActions.js
    - reducer   # reducer 함수
        - todoReducer.js
    - store    # redux store
        - index.js
    - components   
        - atoms
        - molecules
        - organisms
        - pages
- app.js
    



```


### thunk react query




what we did today 
 
first we made a server and a database to store datas
we use express sequelize, express and mysql2 in backend

we install react-app for front end and we distributed folders 
we start from creating store and reducer

what is reducer function in javascript? 
reducer function in javascript is a function which take two parameters(state, action)
state is the state of and object containing the different values
and action is object containing type and payload values 
in type we can use the desired types of a menu and in payload we use the details for the menu

we used useReducer in the begining and put the values of reducer and States initial value and call the function which then returns the 