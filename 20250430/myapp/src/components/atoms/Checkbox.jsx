import React from 'react'
import styled from "styled-components";


const Wrap = styled.div`

    display: flex;
    align-items: center;

    input{

        width: 20px;
        height: 20px;
        margin: 0 4px;
    }
`


const Checkbox = () => {
  return (
    <Wrap>
        <input type="checkbox" />
        <span>아이디 저장</span>
    </Wrap>
  )
}

export default Checkbox
