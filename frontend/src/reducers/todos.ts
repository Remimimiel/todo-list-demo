import Todo from '../types/Todo';
import Action from '../types/Action';
import ActionTypes from '../types/ActionTypes';


let initialState: Array<Todo> = [];

export default (state: Array<Todo> = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.ADD_TODO: {
            let { id, content, completed } = action.payload;
            if (id === -1) {
                id = state[state.length - 1].id + 1;
            }

            return [
                ...state, {
                    id, content, completed
                }
            ];
        }
        case ActionTypes.TOGGLE_TODO: {
            return state.map((todo) =>
                (action.payload.id === todo.id)
                ? {...todo, completed: !todo.completed} : todo
            );
        }
        default:
            return state;
    }
};
