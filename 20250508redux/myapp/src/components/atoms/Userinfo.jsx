import React, { use } from 'react'
import { useSelector } from 'react-redux'

// 전역 상태 업데이트
const Userinfo = () => {
    // useSelector inquire the datas in store 
    // combineReducers 컴바인으로 리듀서를 여러가지 사용ㅇ할때 컴바인에 전달한 키로 조회를해야한다
    // 상태의 묶음의 구분은 키로 할당이 
    const userInfo = useSelector(state => state.userReducer.userInfo)
    console.log(userInfo)
  return (
    <div>
        유저의 이름 : {userInfo ? userInfo.nick : null}
    </div>
  )
}

export default Userinfo
