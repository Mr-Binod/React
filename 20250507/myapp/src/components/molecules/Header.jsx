import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/Title'

const Headerwrap = styled.ul`
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    box-sizing: border-box;
    box-shadow: 0 0 22px -18px;
`

const Header = ({userInfo}) => {
  return (
    <Headerwrap>
        <Title tag={true} path={'/'}>홈페이지</Title>
        <Title tag={true} path={'/board'}>게시판</Title>
        <Title path={'/mypage'}>마이페이지</Title>
        <Title path={'/Login'}>로그인</Title>
        <div>
            {userInfo.isLogin ? <span>아이디 : {userInfo.uid} 닉네임 : {userInfo.nick}</span> : <span></span> }
        </div>
    </Headerwrap>
  )
}

export default Header
