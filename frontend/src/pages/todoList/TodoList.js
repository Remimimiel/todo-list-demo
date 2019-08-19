import React from 'react';

import RcQueueAnim from 'rc-queue-anim';

import TodoItem from './TodoItem';
import { getVisibleTodos } from '../../selectors';
import { useShallowEqualSelector } from '../../hooks';


export default ({ visibilityFilter }) => {
    const todos = useShallowEqualSelector((state) =>
        getVisibleTodos(state, visibilityFilter));

    return (
        <RcQueueAnim
            className='todo-list'
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}
            component="ul"
            leaveReverse>
            {todos && todos.length ? todos.map((todo) =>
                <TodoItem
                    key={`todo-${todo.id}`}
                    todo={todo}
                />
            ) : 'No todos, yay!'}
        </RcQueueAnim>
    );
}
