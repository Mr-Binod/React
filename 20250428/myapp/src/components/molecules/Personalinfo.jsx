import React from 'react'
import Content from '../atoms/content/Content'
import Title from '../atoms/content/Title'
import MidContent from '../atoms/content/MidContent'
import LongContent from '../atoms/content/LongContent'


const Personalinfo = () => {
  return (
    <div className='personalinfoWrap'>
      <Title>기본 정보</Title>
      <div className='firstLine'>
        <Content bodytext='우편번호'>12345</Content>
        <Content bodytext='우편번호'>010-8954-2211</Content>
        <MidContent bodytext='우편번호'>blackorion3@gmail.com</MidContent>
      </div>
      <div className='secondLine'>
        <Content bodytext='우편번호'>12345</Content>
        <LongContent bodytext='주소'>서울시 </LongContent>
      </div>
      <div className='secondLine'>
        <Content bodytext='최종학력'>태학중퇴퇴</Content>
        <LongContent bodytext='주소'>westin college of H M </LongContent>
      </div>
      <div className='fourthLine'>
        <MidContent bodytext='자경증'>웹학 전문가가</MidContent>
        <MidContent bodytext='경력사항'>웹 풀스택 개발</MidContent>
      </div> <br />
      <Title>학습용 계정 정보보</Title>
      <div className='fourthLine'>
        <MidContent bodytext='자경증'>웹학 전문가가</MidContent>
        <MidContent bodytext='경력사항'>웹 풀스택 개발</MidContent>
      </div>
      <div className='fourthLine'>
        <MidContent bodytext='자경증'>웹학 전문가가</MidContent>
        <MidContent bodytext='경력사항'>웹 풀스택 개발</MidContent>

      </div>
      
    </div>
  )
}

export default Personalinfo
