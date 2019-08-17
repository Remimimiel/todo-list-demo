import { ADD_TODO_ASYNC } from '../constants/actionTypes';

const addTodoAsync = (content) => ({
    type: ADD_TODO_ASYNC,
    payload: {
        content
    }
});

export default addTodoAsync;
