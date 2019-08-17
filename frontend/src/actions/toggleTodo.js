import { TOGGLE_TODO_ASYNC } from '../constants/actionTypes';


const toggleTodoAsync = (id) => ({
    type: TOGGLE_TODO_ASYNC,
    payload: {
        id
    }
});

export default toggleTodoAsync;
