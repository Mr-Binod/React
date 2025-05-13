import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// 전역 상태를 조회회
const Loginbtn = () => {
    // 부입받은 스토어의 dispatch 참조조
    const dispatch = useDispatch(); 
    const action = useSelector(action => action.userReducer)
    console.log(action,'asdf')
  return (
    <div>
  
      <button onClick={() => dispatch({type : 'Login'})} >로그인</button>
      {action.userInfo  ?  <button onClick={() => dispatch({type : 'Logout'})} >로그아웃</button> : ''}
    </div>
  )
}

export default Loginbtn
