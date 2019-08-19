import { createSelector } from 'reselect';

// import { VISIBILITY_FILTER } from '../constants/visibilityFilter';

import Todo from '../types/Todo';
import State from '../types/State';
import FilterEnum from '../types/FilterEnum';


export const getTodos = (state: State) => state.todos;
export const getVisibilityFilter = (_: State, filter: FilterEnum) => filter;

export const getVisibleTodos = createSelector(
    getTodos,
    getVisibilityFilter,
    (todos: Array<Todo>, filter: FilterEnum) => {
        switch (filter) {
            case FilterEnum.COMPLETED:
                return todos.filter((todo: Todo) => todo.completed);
            case FilterEnum.INCOMPLETE:
                return todos.filter((todo: Todo) => !todo.completed);
            default:
                return todos;
        }
    }
);
