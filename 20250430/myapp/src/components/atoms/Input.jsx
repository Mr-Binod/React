import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
    width: 311px;
    height: 48px;
    /* padding: 16px; */
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    margin: 10px 0;
    input {
        font-size: 16px;
        width: ${({inputWidth}) => inputWidth ? inputWidth : '279px'};
        height: 16px;
        box-sizing: border-box;
        margin: 16px;
        border: none;
        outline: none;
    }
`
const Input = ({type, placeholder, inputWidth, user}) => {
    
    console.log(user, 'user')
    return (
        <Wrap inputWidth={inputWidth}>
            <input {...user} type={ type ? type : 'text'} placeholder={ placeholder ? placeholder : ''}/>
        </Wrap>
    )
}

export default Input
