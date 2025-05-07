# react router, useReducer

## react router는 새로고침이 되지않는 페이지
> react에서 기본적인 라우팅을 제공하지 않고 react-router-dom 이라는 라이브러리가 제공을 하게 되었다
> 이전에 정적인 멀티페이지 방식에서느 새로고침이 일어나도 괜괜찮았지만
> SPA 가 등장하면서 리액트 혹은 뷰 등등 새로고침되어서 자바스크립트가 다시 초기부터 동작하는 로직을 방지 하게 하였다. 상태변수가 초기화 되는 문제점.
> 주소가 바뀌어도 브라우저가 새로고침 되지 않고 url 의 변경을 감지하면 이동 새로고침을 막아버리고 컴포넌트를보여주는 조건을 통해서 컴포넌트 브라우저에 랜더링

- react 에서는 기본 라우팅 기능을 제공하지 않는다.
- react 의 라우팅을 보완하기 위해서 react-router-dom을 제공
- react-router, react-router-dom 

1. react-router : routing의 기능만 가지고 있는 라이브러리
2. react-router-dom : 브라우저환경에서 dom을 보여주는 동작을 하는 라이브러리

```sh
npm i react-router-dom

```

```js
// BrowserRouter : html5의 히스토리 api를 사용한 라우팅 페이지 전체를 감싸는 부모컴포넌트트
// Routes : 여러개의 페이지 컴포넌트를 감싸는 부모 컴포넌트트
// Route : 어떤 컴포넌트를 보여줄지 url의 조건

const Main = () => {
    return <>
    </>
}
const Board = () => {
    return <>
    </>
}

// 경로일때 메인 페이지를 랜더링
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    // 페이지 구조
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}>
            <Route path='/board' element={<Board />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 페이지 이동

```js

// 메인 페이지에서 게시판 페이지로 이동
// <a href=""></a> 랑 비섯하는데 새로고침 막아는 tag
// params 도 전달 가능
import {Link} from 'react-router-dom';
const Main = () => {
    return <>
        
        <Link to='/board/1'>1 게시판으로 이동<Link/>
        <Link to='/board/2'>2 게시판으로 이동<Link/>
        <Link to='/board/3'>3 게시판으로 이동<Link/>
    </>
}

```


### 파라미터가 필요한 경우우


```js
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const Board = () => {
    const {id} = useParams() // === {id : 1}
    return <>
    </>
}
function App() {
  return (
    // 페이지 구조
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>}>
            <Route path='/board:id' element={<Board />}/>
        </Routes>
    </BrowserRouter>
  );
}

```

### javascript 고드 내용에서 페이지 이동

```js

import {useNavigate} from 'react-router-dom';
// locatin.href 저럼 동작
// 코드 로직에서 페이지를 이동시켜야하는 경우
const Main = () => {
    const navigate = useNavigate(); // 반환값이 제공하는건 페이지를 이동할수 있는 기능을 가지고 있는 함수
    navigate('/')   // 경로 전달
    const boardPageHandler = (params) => {
        // javascript 코드 영역에서 페이지 이동이 필요한 경우우
        navigate('/board/' + params)   // 경로 전달
        navigate(`/board/${params}`)   // 경로 전달

    }
    return <>
        
        <div onClick={() => boardPageHandler('1')}>1 게시판으로 이동<div/>
        <div onClick={() => boardPageHandler('2')}>2 게시판으로 이동<div/>
        <div onClick={() => boardPageHandler('3')}>3 게시판으로 이동<div/>
    </>
}

```

### 페이지의 리다이렉트
> 접근 권한의 있어야하는 페이지지

```js
const Mypage = () => {
    
}

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {useState} from 'react';

// Navigate    redirects without refreshing the browser
function App() {
    const [login, setLogin] = useState(false);

    // component 가 component 를 받아서 조건에 따라서 컴포넌트를 반환
    //  HOC 고차 컴포넌트 => 고차 컴포넌트를 전달받아서 컴포넌트의 커스텀
    const mypageRoute = () => {
        if(login)
        return(<Mypage />)
        return(<Navigate to='/' />)
    }
    return (
        // 페이지 구조
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/board' element={<Board />}/>
                <Route path='/mypage' element={<mypageRoute />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


```


### 실습 

```sh
npm i styled-components
```

가상요소

마이페이지에 접근하면 호그인이 되어있는지 확인해서 로그인이 안되어있으면 리다이렉트

## useReducer

> useState 를 대체할수 있는 hook함수
> useState는 단순한 값의 상태를관리할때
> useReducer는 복잡한 값 즉 여러개의 값을 구분지어서 관리할때 가독성의 이점을 가질수 있다
> 복잡한 값을 기능을 구분지어서 상태를 관리할때 하지만 API 로직을 피해서 작성하는게 좋다
> redux의 개념을 가지고 괜찮은데 만든 hook useReduce 리듀서를 기반으로 상태를 한곳에서 가독성이 좋게 처리하자

- 컴포넌트의 내부가 복잡해지는 것을 방지
- 상태의 의존성을 관리할수 있다.
- 상태를 관리할때 ㄹ로직을 컴포넌트의 내부에 위치하지않게 분리 할수 있는 이점

### 목차 

1. state
    - 사용할 상태 변수

2. dispatch 
    - Reduce function contains the type for dispatch
    type = 어떤 행동을 호출하는지, payload = 행동할때 필요한 값 
    - dispatch({type : '', payload : {}})

    - 상태를 변화시키기 위해서 데이터를 보낸다.
    - 리듀서의 함수로 제공된다.
    - 함수를 호출하면 객체를 전달하고 객체의 내용을 가지고 상태를 업데이트 시킨다.
    - type, payload 두가지의 값을 가지고 있는 객체를 전달해서 상태를 업데이트한다.

3. initialState
    - 초기 상태의 값

4. reducer
    - 기능의 내용을 정의해놓은 함수

```js

const [count, setCount] = useState(0);
const increment = () => {
    setCount(prev => prev + 1)
}


// reducer 

import {useReducer} from 'react';

// const user = {uid : '', isLogin : false, nick : ''}
const initState = { count : 0}
const increment = 'increment';
const decrement = 'decrement';
const reducer = (state, action) => {
    // 두번째 매개변수에는 action 안에는 {type, payload} 값을 받고
    // state는 이전의 상태
    const {type, payload} = action;
    switch(type) {
        // increment 타입일 경우 로직이 여기에 작성되고 return 값이 없으면 안된다. 상태를 return 된 값으로 업데이트 하기때문에
        case increment : {
            return {...state, count : state.count + payload.count}

        
        default : return {...state}
        }
    }
}

dispatch({tpe : 'increment', payload : {count : 5}})


//  Login.jsx
import {useReducer} from 'react';

export const initState = {uid : '', isLogin : false, nick : ''}
const Login = 'login';
const Logout = 'logout';
export const reducer = (state, action) => {
    // 두번째 매개변수에는 action 안에는 {type, payload} 값을 받고
    // state는 이전의 상태
    const {type, payload} = action;
    const {uid, isLogin, nick} = payload;
    switch(type) {
        // increment 타입일 경우 로직이 여기에 작성되고 return 값이 없으면 안된다. 상태를 return 된 값으로 업데이트 하기때문에
        const nick = 'soon';
        case LOGIN : {
            return {...state, uid, nick, isLogin : true}

        }
        case LOGOUT : {...initState}
        default : return {...state}
    }
}

// --------------------------------------------------------
import {useReducer} from 'react';
import {initState, reducer} from 'Login.jsx'
const Mainpage = () => {
    // useReducer 상태변수 초기화
    const [state, dispatch] = useReducer(reducer, initState); 
    const Login = () => {
        dispatch({type : Login, payload : initState})
    }
}


dispatch({tpe : Login, payload : initState})



// reducer
// redux