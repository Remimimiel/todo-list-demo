import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { Checkbox } from 'antd';

import toggleTodoAsync from '../../actions/toggleTodo';

import Todo from '../../types/Todo';


export interface TodoProps {
    todo: Todo
};

export default (props: TodoProps) => {
    const dispatch = useDispatch();

    const id = props.todo.id;
    const toggleTodoAsyncCallback = useCallback(
        () => dispatch(toggleTodoAsync(id)),
        [dispatch, id]
    );

    return (
        <li className='todo-item'>
            <Checkbox
                checked={props.todo.completed}
                onChange={toggleTodoAsyncCallback}
            >
                <span
                    className={cx(
                        'todo-item-text',
                        props.todo && props.todo.completed && 'todo-item-text-completed'
                    )}
                >
                    {props.todo.content}
                </span>
            </Checkbox>
        </li>
    )
};
