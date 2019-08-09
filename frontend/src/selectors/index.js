import { createSelector } from 'reselect';

import { VISIBILITY_FILTER } from '../utils/constants';


export const getTodos = (store) => store.todos;
export const getVisibilityFilter = (store) => store.visibilityFilter;
// 使用reselect提供的缓存机制提升性能
export const getVisibleTodos = createSelector(
    [ getTodos, getVisibilityFilter ],
    (todos, visibilityFilter) => {
        switch (visibilityFilter) {
            case VISIBILITY_FILTER.COMPLETED:
                return todos.filter(todo => todo.completed);
            case VISIBILITY_FILTER.INCOMPLETE:
                return todos.filter(todo => !todo.completed);
            case VISIBILITY_FILTER.ALL:
            default:
                return todos;
        }
    }

);
