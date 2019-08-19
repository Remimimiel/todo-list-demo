import { ADD_TODO, TOGGLE_TODO } from '../constants/actionTypes';

import Todo from '../types/Todo';
import Action from '../types/Action';


let initialState: Array<Todo> = [];

export default (state: Array<Todo> = initialState, action: Action) => {
    switch(action.type) {
        case ADD_TODO: {
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
        case TOGGLE_TODO: {
            return state.map((todo) =>
                (action.payload.id === todo.id)
                ? {...todo, completed: !todo.completed} : todo
            );
        }
        default:
            return state;
    }
};
