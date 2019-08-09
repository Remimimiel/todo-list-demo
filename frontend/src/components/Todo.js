import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import { Checkbox } from 'antd';

import toggleTodo from '../actions/toggleTodo';


const Todo = ({ todo, toggleTodo }) => (
    <li className='todo-item'>
        <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
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
);

// <Todo />组件绑定action: toggleTodo作为props
export default connect(
    null,
    { toggleTodo }
)(Todo);
