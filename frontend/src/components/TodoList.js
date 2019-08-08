import React from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'
import { getTodosByVisibilityFilter } from '../utils/selectors'


const TodoList = ({ todos }) => (
    <ul className='todo-list'>
        {todos && todos.length ? todos.map((todo, index) =>
            <Todo
                key={`todo-${todo.id}`}
                todo={todo}
            />
        ) : 'No todos, yay!'}
    </ul>
);

const mapStateToProps = (state) => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};

// <TodoList />组件绑定filter和todos状态作为props
export default connect(
    mapStateToProps
)(TodoList);