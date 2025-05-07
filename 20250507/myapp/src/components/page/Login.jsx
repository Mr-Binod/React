import React, { useReducer } from 'react'
import Useinput from '../../hooks/Useinput'
import { initState, reducer, LOGIN, LOGOUT } from '../../store/Userreducer';

const Login = ({state, dispatch}) => {
    const uidInput = Useinput();
    const upwInput = Useinput();
    
    const login = () => {
        console.log('asd')
        dispatch({type : LOGIN, payload : {uid : uidInput.value, upw : upwInput.value}})
    }
    const logout = () => {
        console.log('asd')
        dispatch({type : LOGOUT, payload : initState})
    }
  return (
    <div>
      <label htmlFor="">아이디디</label>
      <input type="text" {...uidInput}/>
      <label htmlFor="">비밀번호호</label>
      <input type="text" {...upwInput}/>
      <button onClick={login}>로그인</button>
        {state.isLogin ? <button onClick={logout}>로그아웃</button> : ''}
    </div>
  )
}

export default Login
