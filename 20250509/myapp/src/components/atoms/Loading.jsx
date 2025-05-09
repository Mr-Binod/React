import React from 'react'
import loadingimg from '../../images/loading.gif';
import styled from 'styled-components';

const Loadingwrap = styled.div`
    position : fixed;
    width : 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    img {
        width : 200px;
        position: absolute;
        left : 50%;
        top : 50%;
        transform : translate(-50%, -50%);
    }
`

const Loading = () => {
  return (
    <Loadingwrap>
      <img src={loadingimg} alt="loading img" />
    </Loadingwrap>
  )
}

export default Loading
