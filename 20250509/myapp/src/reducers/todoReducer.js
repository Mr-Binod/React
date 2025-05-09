import { readTodoLoading, readTodoResult, createTodo } from "../actions/todoActions"



const initState = {
    loading : false,
    todos : []
}

const reducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type) {
        case readTodoLoading:
            
            return {...state, loading : true};
        case readTodoResult:
            
            return {...state, loading : false, todos : payload.data};
        case createTodo:
            
            return {...state, todos : [...state.todos, {name : payload.name}]};
    
        default:
            return state;
    }
}





export default reducer