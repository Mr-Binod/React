import React from 'react'
import styled from 'styled-components'


const Wrap = styled.button`
    width: 311px;
    height: 56px;
    border-radius: 4px;
    padding: 10px;
    background-color: #909090;
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    margin: 10px 0;
`

const Button = ({content, loginHandler, loading}) => {

  return (
    <Wrap onClick={loginHandler} disabled={loading}>
      {loading ? '로딩중' : content}
    </Wrap>
  )
}

export default Button
