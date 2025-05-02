import React from 'react'
import Content from '../atoms/Content'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 1080px;
    height: ${({height}) => height ? height : '40px'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({bcolor}) => bcolor ? bcolor : 'white'};
    border-radius: 5px;
    border-bottom: ${({borderb}) => borderb ? borderb : '1px solid #E7F1FE'};
 
`

const Title = () => {
  return (
   
    <Wrap bcolor={'#F2F5F9'} height={'30px'} borderb={'none'}>
            <Content width={'40px'} height={'30px'}>No</Content>
            <Content width={'980px'} height={'30px'} center={'center'}>평가 항목</Content>
            <Content width={'60px'} height={'30px'}>배점</Content>
    </Wrap>
  
  

    
  )
}

export default Title
