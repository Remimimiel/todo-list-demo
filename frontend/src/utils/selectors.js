// 获取store中的各种state
import { VISIBILITY_FILTER } from './constants'


export const getTodoState = (store) => store.todos;

export const getTodoList = (store) => {
    let state = getTodoState(store);
    if (state) {
        return state.allIds;
    }
    return [];
};

export const getTodoById = (store, id) => {
    let state = getTodoState(store);
    if (state) {
        return {
            ...state.byIds[id],
            id
        };
    }
    return {};
};

export const getTodos = (store) =>
    getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, filter) => {
    let todos = getTodos(store);
    switch (filter) {
        case VISIBILITY_FILTER.COMPLETED:
            return todos.filter(todo => todo.completed);
        case VISIBILITY_FILTER.INCOMPLETE:
            return todos.filter(todo => !todo.completed);
        case VISIBILITY_FILTER.ALL:
        default:
            return todos;
    }
};
