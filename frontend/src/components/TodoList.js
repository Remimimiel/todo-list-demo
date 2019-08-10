import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { getVisibleTodos } from '../selectors';


const TodoList = ({ todos }) => (
    <ul className='todo-list'>
        {todos && todos.length ? todos.map((todo, index) =>
            <Todo
                key={`todo-${todo.id}`}
                todo={todo}
            />
        ) : 'No todos, yay!'}
    </ul>
)

// <TodoList />组件绑定filter和todos状态作为props
export default connect((state) => ({ todos: getVisibleTodos(state) }))(TodoList);
