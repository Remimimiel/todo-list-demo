import { TOGGLE_TODO } from './actionTypes'


const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
});

export default toggleTodo;
