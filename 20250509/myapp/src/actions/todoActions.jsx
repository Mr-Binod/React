import { readTodoList, createTodoList } from "../api/Todo";

// action type 상수로 정의
// reducer 전달해서 사용할 상수
// action 생성자 함수에서 사용할 상수 -> 리듀서에서 타입을 가지고 로직 실행
export const readTodoLoading = 'TODO_LOADING';
export const readTodoResult = 'TODO_RESULT';
export const createTodo = 'TODO_CREATE'

// 리듀서에서 호출할 내용
// 리듀서에서 반환하는 상태의 값이 로딩
const todoLoading = () => ({type : readTodoLoading})
// 리듀서에서 반환하는 값이 로딩이 완료된 상태
const todoResult = (data) => ({type : readTodoResult, payload : data})
// 리듀서에서 반환하는 값이 글 등록 성공한 이후
const todoCreate = (data) => ({type : createTodo, payload : data});

// action 생성자 함수

// readTodoAction 글을 조회하는 함수 로딩 이후에 글이 조회된다
export const readTodoAction = () => {
    return async (dispatch, getState) => {
        // dispatch({type : readTodoLoading}) 
        dispatch(todoLoading())
        const data = await readTodoList();
        console.log(data)
        // 리듀서 함수 호출
        dispatch(todoResult(data))
    }
}

// 글을 추가하는 함수
export const createTodoAction = (name) => {
    return async (dispatch, getState) => {
        const data = await createTodoList(name);

        dispatch(todoCreate({name}));
    }
}