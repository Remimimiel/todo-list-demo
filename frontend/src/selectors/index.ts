import { createSelector } from 'reselect';

import { VISIBILITY_FILTER } from '../constants/visibilityFilter';

import Todo from '../types/Todo';
import State from '../types/State';


export const getTodos = (state: State) => state.todos;
export const getVisibilityFilter = (_: State, visibilityFilter: string) => visibilityFilter;

export const getVisibleTodos = createSelector(
    getTodos,
    getVisibilityFilter,
    (todos: Array<Todo>, visibilityFilter: string) => {
        switch (visibilityFilter) {
            case VISIBILITY_FILTER.COMPLETED:
                return todos.filter((todo: Todo) => todo.completed);
            case VISIBILITY_FILTER.INCOMPLETE:
                return todos.filter((todo: Todo) => !todo.completed);
            default:
                return todos;
        }
    }
);
