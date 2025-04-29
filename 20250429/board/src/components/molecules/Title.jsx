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
    <>
    <Wrap bcolor={'#F2F5F9'} height={'30px'} borderb={'none'}>
            <Content width={'40px'} height={'30px'}>No</Content>
            <Content width={'980px'} height={'30px'} center={'center'}>평가 항목</Content>
            <Content width={'60px'} height={'30px'}>배점</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>1</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>2</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>3</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>4</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>5</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>6</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>7</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>8</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>9</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
    <Wrap>
    
        <Content width={'40px'} height={'30px'}>10</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
    </Wrap>
      
  
    </>

    
  )
}

export default Title
