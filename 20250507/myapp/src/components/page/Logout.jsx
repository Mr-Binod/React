import React from 'react'

const Logout = ({dispatch}) => {
    const LogoutHandler = () => {
        console.log('aaa')
    }
  return (
    <div>
      <button onClick={LogoutHandler()}>로그아웃</button>
    </div>
  )
}

export default Logout
