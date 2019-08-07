import { ADD_TODO } from './actionTypes'


let nextId = 0;

const addTodo = (content) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextId,
        content
    }
});

export default addTodo;
