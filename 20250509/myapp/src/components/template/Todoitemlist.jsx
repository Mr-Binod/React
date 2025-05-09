import React from 'react'
import styled from 'styled-components'

const TodoListWrap = styled.div`
    width : 1080px;
    height: 480px;
    border : 1px solid;
    box-sizing: border-box;
    border-radius: 12px;
    overflow: hidden;
    margin: 20px;
    .item {
       
        width: 100%;
        height: 40px;
        display: flex;
       
        & span{
            width: 40px;
            height: 100%;
            border-right : 1px solid;
            border-bottom : 1px solid;
            display: inline-block;
            
        }
        & span:last-child{
            width: 1080px;
            border-bottom: 1px solid
        }
        &.title {
            background-color: #FEF5F9;
            text-align: center
        }
    }
`

const Todoitemlist = ({todos}) => {
    console.log(todos,'2222')
  return (
    <TodoListWrap>
        <div className='item title'>
            <span>No</span>
            <span>할일 내용</span>
        </div>
        {todos.map((el, i) => (
            <div className='item'>
            <span>{i}</span>
            <span>{el.name}</span>
        </div>
        ))}
    </TodoListWrap>
  )
}

export default Todoitemlist
