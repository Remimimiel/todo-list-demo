import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';

import { Checkbox } from 'antd';

import toggleTodoAsync from '../../actions/toggleTodo';


export default ({ todo }) => {
    const dispatch = useDispatch();

    const id = todo.id;
    const toggleTodoAsyncCallback = useCallback(
        () => dispatch(toggleTodoAsync(id)),
        [dispatch, id]
    );

    return (
        <li className='todo-item'>
            <Checkbox
                checked={todo.completed}
                onChange={toggleTodoAsyncCallback}
            >
                {/* cx()用来动态生成className
                    todo.completed !== true -> className='todo-item-text'
                    todo.completed === true -> className='todo-item-text-completed todo-item-text' */}
                <span
                    className={cx(
                        'todo-item-text',
                        todo && todo.completed && 'todo-item-text-completed'
                    )}
                >
                    {todo.content}
                </span>
            </Checkbox>
        </li>
    )
};
