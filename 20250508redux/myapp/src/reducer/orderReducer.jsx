// 주문 유저가 주문을 할수 있는 로직


const initState = {
    orderName : '',
    price : 0
}
const reducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'A':{

            const {orderName, price} = payload
            return {...state, orderName, price};
        }
        case 'B':{

            const {orderName, price} = payload
            return {...state, orderName, price};
        }
            
        case 'C':{

            const {orderName, price} = payload
            return {...state, orderName, price};
        }
            
        case 'D':{

            const {orderName, price} = payload
            return {...state, orderName, price};
        }
            
    
        default:
            return state;
    }
}

export default reducer