import React from 'react'
import styled from 'styled-components';
import logo from '../../../images/logo.png'

const Wrap = styled.div`
  background-color : #11192A;
  width : 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position : relative;
   /* 자식 요소중에 클래스 logo-img */
   /* 스타일 컴포넌트 안에 있는 자식 요소중에서 선택자로 스타일 적용 */
  .logo-img {

  } 
  /* & 본인 컴포넌트에서 반환하는 요소를 선택자로 호출할때 */
  /* 전체 부모요소를 선택 */
  /* 이미지 웹은 원본 사이즈 혹은 2 배의 크기 이미지를 달라고 요청*/
  /* 모바일 원본 이미지 사이즈가 3배 30px */
  &::before {
    content : '';
    background-image : url(${logo});
    display : block;
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width: 232px;
    height: 30px;
    background-size : 240px;
  }
`

const Content = styled.div`
  width : 100%;
  height: 80px;
  background-color: #F9FAFC;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  line-height: 40px;
  font-size: 24px;
  box-shadow: 0 0 15px -20px;
`

const Header = () => {
  return (
    <>
      <Wrap/>
      <Content>로그인 이후 이용해주세요</Content>
    </>
    /* <Wrap>
       <span>

      <img className='logo-img' src={logo} alt="" />
      </span> }
    </Wrap> */

  )
}

export default Header
