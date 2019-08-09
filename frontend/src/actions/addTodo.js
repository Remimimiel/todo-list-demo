import { ADD_TODO } from './actionTypes';


const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: -1,
        content,
        completed: false
    }
});

export default addTodo;
