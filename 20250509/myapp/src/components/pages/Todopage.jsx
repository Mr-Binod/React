import React, { useState, useEffect } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Loading from '../atoms/Loading'
import Todoitemlist from '../template/Todoitemlist'
import { useDispatch, useSelector } from 'react-redux';
import { createTodoAction, readTodoAction } from '../../actions/todoActions'



const Todopage = () => {
    const dispatch = useDispatch();
    const {todos, loading} = useSelector(state => state)
    const [value, setValue] = useState('');
    console.log(todos, 'asdfasdf')
    useEffect(() => {
        dispatch(readTodoAction())
    }, [])

    const createHandler = () => {
        dispatch(createTodoAction(value))
    }

    const inputValueHandler = (e) => {
        setValue(e.target.value);
    }

  return (
    <div>
      <Input placeholder={'할일을 입력해주세요'} onChange={inputValueHandler}/>
      <Button onClick={createHandler}>할일 추가</Button>
      <Todoitemlist todos={todos} />
      {loading ? <Loading /> : null}
    </div>
  )
}


export default Todopage