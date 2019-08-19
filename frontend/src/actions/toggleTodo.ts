import { TOGGLE_TODO_ASYNC } from '../constants/actionTypes';


export default (id: number) => ({
    type: TOGGLE_TODO_ASYNC,
    payload: {
        id
    }
});
