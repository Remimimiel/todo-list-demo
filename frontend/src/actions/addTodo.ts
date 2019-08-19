import ActionTypes from '../types/ActionTypes';


export default (content: string) => ({
    type: ActionTypes.ADD_TODO_ASYNC,
    payload: {
        content
    }
});
