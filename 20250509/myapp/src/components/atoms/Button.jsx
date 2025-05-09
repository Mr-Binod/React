import React from 'react'
import styled from 'styled-components';


const ButtonWrap = styled.div`
    padding: 14px 30px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid;
    display: inline-block;
    cursor: pointer;
`

const Button = ({children, onClick}) => {
  return (
    <ButtonWrap onClick={onClick}>
      {children}
    </ButtonWrap>
  )
}

export default Button
