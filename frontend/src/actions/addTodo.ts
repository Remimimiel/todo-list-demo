import { ADD_TODO_ASYNC } from '../constants/actionTypes';


export default (content: string) => ({
    type: ADD_TODO_ASYNC,
    payload: {
        content
    }
});
