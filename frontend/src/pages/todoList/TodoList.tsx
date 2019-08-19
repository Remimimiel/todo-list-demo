import React from 'react';

import RcQueueAnim from 'rc-queue-anim';

import TodoItem from './TodoItem';
import { getVisibleTodos } from '../../selectors';
import { useShallowEqualSelector } from '../../hooks';

import State from '../../types/State';
import Todo from '../../types/Todo';
import FilterEnum from '../../types/FilterEnum';


export interface TodoListProps {
    filter: FilterEnum;
};

export default (props: TodoListProps) => {
    const todos = useShallowEqualSelector((state: State) =>
        getVisibleTodos(state, props.filter));

    return (
        <RcQueueAnim
            className='todo-list'
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}
            component="ul"
            leaveReverse>
            {todos && todos.length ? todos.map((todo: Todo) =>
                <TodoItem
                    key={`todo-${todo.id}`}
                    todo={todo}
                />
            ) : 'No todos, yay!'}
        </RcQueueAnim>
    );
};
