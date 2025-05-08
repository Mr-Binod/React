import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Order = () => {
    // 마운트 단계에서 api 호출을 통해 데이터를 받은상태태
    const data = [
        {name : '김치볶음밥', price : 10000, code : 'A'},
        {name : '계란볶음밥', price : 12000, code : 'B'},
        {name : '제육볶음밥', price : 13000, code : 'C'},
        {name : '고등어구이이', price : 15000, code : 'D'}
    ]
    const [select, setSelect] = useState(null);
    const [text, setText] = useState(null);
    const [content, setContent] = useState(null);
    const userInfo = useSelector(state => state.userReducer.userInfo);
    const order = useSelector(state => state.orderReducer);
    const dispatch = useDispatch();
    const orderHandler = () => {
        if(userInfo){
            try {
                
                dispatch({
                    type: data[select].code, 
                    payload : {orderName : data[select].name, 
                        price : data[select].price}})
            } catch (error) {
                setText('choose')
                // return
            }
            
        }
        else {
            setText('로그인해주세요')
        }
    }

    useEffect(() => {
        if(order.orderName === '') return;
        // 업데이트 구문
        setContent(`주문자는 ${userInfo.nick}가 맛있는 ${order.orderName}을 주문하고 금액은 ${order.price} 입니다`);
        console.log(order)
    }, [order])
    useEffect(() => {
        if(userInfo) {
            setText(null)
        }
        else {
            setContent(null)
        }
    }, [userInfo])

    return (
        <div>
            {text} <br />
            주문할 메뉴는 : {select ? data[select].name : '선택해주세요'} <br />
            {data.map((el, i) => <button key={i} onClick={() => setSelect(`${i}`)} >{el.name}</button>)} <br />
            <button onClick={orderHandler} >주문하기</button> <br />
            안내 : {content}
        </div>
    )
}


export default Order
