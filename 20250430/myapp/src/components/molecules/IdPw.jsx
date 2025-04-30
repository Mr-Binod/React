import React from 'react'
import Input from '../atoms/Input'
import { icon } from '../../images'
import Button from '../atoms/Button'
import Checkbox from '../atoms/Checkbox'
import styled from 'styled-components'
import Div from '../atoms/Div'
import VLine from '../atoms/VLine'
import { kakao } from '../../images'



const Wrap = styled.div`
    /* height: max-content; */
   
    .Pwline {
        width: 311px;
        position: relative;
       
    }
    .Pwline img {
        position: absolute;      
        right: 0px ;
        top: 0px;
        margin: 16px 16px 16px 10px;
    }
    .Idpwline {
        /* margin: 0 71px; */
        width: max-content;
        margin: 20px auto 0 auto;
        display: flex;
        align-items: center
    }
    .loginimg {
        padding: 0;
        margin: 68px 0 32px 0;
        width: 311px;

    }
`


const IdPw = ({userId, userPw, loginHandler, loading}) => {
  return (
    <Wrap>
        <div>로그인</div>
      <Input placeholder={'아이디 또는 이메일'} user={userId}/>
      <div className='Pwline'>
        <Input placeholder={'비밀번호'} inputWidth={'253px'} user={userPw}/>
        <img src={icon} alt="" />
      </div>
      <Checkbox />
      <Button content={'로그인'} loginHandler={loginHandler} loading={loading} />
      <div className='Idpwline'>
        <Div>회원가입</Div>
        <VLine/>
        <Div>아이디 찾기기</Div>
        <VLine/>
        <Div>비밀번호 찾기</Div>
      </div>
      <img src={kakao} alt="" className='loginimg'/>
    </Wrap>
  )
}

export default IdPw;
