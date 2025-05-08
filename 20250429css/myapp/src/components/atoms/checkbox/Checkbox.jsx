import React from 'react'
import styled from 'styled-components'
import { useId } from 'react'

const Checkboxwrap = styled.div`
    label {
        width: 22px;
        height: 22px;
        border: 1px solid #888;
        border-radius: 4px;
        display: inline-block;
        
    }

    input {
        display: none;
        /* width: 22px;
        height: 22px; */
        &:checked + label {
            background-color: #5569FF;
            border: 1px solid #5569FF;
            position: relative;
            
            
        }
        &:checked + label::before,
        &:checked + label::after {
            content: '';
            width: 10px;
            height: 3px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% - 2.5px), -50%) rotate(45deg)
        }
        &:checked + label::after {
            transform: translate(calc(-50% + 2.5px), -50%) rotate(-45deg)
        }
    }
    /* input:checked + label {
        background-color: #5569FF;
        border: 1px solid #5569FF;
    } */
`

const Radioboxwrap = styled.div`
    
`

const Checkbox = ({type = "checkbox", inputName}) => {
    const id = useId();  // 고유의 값 생성
    if(type === "checkbox") return (
            <Checkboxwrap>
                <input id={id} type={'checkbox'} />
                <label htmlFor={id}></label>  
            </Checkboxwrap>
        )
    return (
        <Radioboxwrap>
            <input id={id} type={'radio'} name={inputName}/>
            <label htmlFor={id} name={inputName}></label>  
        </Radioboxwrap>
    )
}

export default Checkbox
