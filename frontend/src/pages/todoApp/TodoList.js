import React from 'react';

import Todo from './Todo';
import { getVisibleTodos } from '../../selectors';
import { useShallowEqualSelector } from '../../hooks';


export default ({ visibilityFilter }) => {
    const todos = useShallowEqualSelector((state) =>
        getVisibleTodos(state, visibilityFilter));

    return (
        <ul className='todo-list'>
            {todos && todos.length ? todos.map((todo) =>
                <Todo
                    key={`todo-${todo.id}`}
                    todo={todo}
                />
            ) : 'No todos, yay!'}
        </ul>
    );
}
