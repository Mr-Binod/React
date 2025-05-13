// user 관련되 생태를 제어할 순수함수

// 초기값

const  initState = {
    userInfo : null
}

// 초기 상태 null 으로 해서 state 에 전달
// reducer should return value dont use break in reducer since it needs return value for further processing
const reducer = (state = initState, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'Login' : {
            // setText(null)
            // api 호출부분 비동기 처리부분은 리듀서에 작성
            // redux-thunk  use middleware for 비동기 로직 처리
            return {...state, userInfo : {nick : 'soon'}}

        }
        case 'Logout' : {
            return {...state, userInfo : null} 
        }
        default : 
            return state
    }
}

export default reducer

try {
    
} catch (error) {
    
}