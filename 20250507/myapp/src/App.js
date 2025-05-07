import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/molecules/Header';
import Main from './components/page/Main';
import Board from './components/page/Board';
import Mypage from './components/page/Mypage';
import Login from './components/page/Login';
import { useReducer } from 'react';
// import { initState, reducer, LOGIN, LOGOUT } from '.';


import React from 'react'
import { initState, reducer, LOGIN, LOGOUT } from './store/Userreducer';
import Logout from './components/page/Logout';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state.isLogin, 'login')
  const mypageRoute = (Page) => {
    console.log(state.isLogin,'wqqq')
    if(state.isLogin)
    return(<Page />)
    return(<Navigate to='/' />)
    // History 가져와서 
}
  return (
    <BrowserRouter>
      <Header userInfo={state} />
      {/* <Routes>
          <Route path='/' element={<Header />}/>
      </Routes> */}
      {/* 자바스크립트가 경로에따라서 동적으로 요소를 렌더링 해주는 구조 */}
      {/* MPA 페이지 새로고침 되어서 자바스크립트가 처음부터 동작하는 구조 */}
      <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/board' element={<Board />}/>
          <Route path='/mypage' element={mypageRoute(Mypage)}/>
          <Route path='/Login' element={<Login dispatch={dispatch} state={state}/>}/>
      </Routes>
      {/* <Footer/> */}
</BrowserRouter>
  )
}

export default App
