import ActionTypes from '../types/ActionTypes';


export default (id: number) => ({
    type: ActionTypes.TOGGLE_TODO_ASYNC,
    payload: {
        id
    }
});
