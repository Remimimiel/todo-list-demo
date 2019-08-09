// 获取store中的各种state
import { VISIBILITY_FILTER } from './constants'


export const getTodos = (store) => store.todos;

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
