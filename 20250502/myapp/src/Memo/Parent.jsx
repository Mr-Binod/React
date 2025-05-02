import React, {useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment =() => {
        setCount(prev => prev + 1)
    }

    const childCountincrement = () => {
        setCount2(prev => prev + 1);
    } 
    return (
        <div>
            <div>count : {count}</div>
            <Child count={count2} name={'첫 번째'}/>
            <Child count={0} name={'두 번째'}/>
            <Child count={0} name={'세 번째'}/>
            <button onClick={increment}>증가</button>
            <button onClick={childCountincrement}>첫번쩨 컴포넌트</button>
        </div>
    )
}

export default Parent
