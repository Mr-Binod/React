
const initState = {uid : '', isLogin : false, nick : ''}
const LOGIN = 'login';
const LOGOUT = 'logout';
const reducer = (state, action) => {
    // 두번째 매개변수에는 action 안에는 {type, payload} 값을 받고
    // state는 이전의 상태
    const {type, payload} = action;
    const {uid} = payload;
    switch(type) {
        // increment 타입일 경우 로직이 여기에 작성되고 return 값이 없으면 안된다. 상태를 return 된 값으로 업데이트 하기때문에
        case LOGIN : {
            const nick = 'soon';
            return {...state, uid, nick, isLogin : true}
        }
        case LOGOUT : return {...initState}
        default : return {...state}
    }
}

export {initState, LOGIN, LOGOUT, reducer}