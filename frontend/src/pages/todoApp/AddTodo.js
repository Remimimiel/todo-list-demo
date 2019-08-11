import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Input, Button } from 'antd';

import addTodoAsync from '../../actions/addTodo';


const AddTodo = ({ addTodoAsync }) => {
    const [input, setInput] = useState('');

    const updateInput = (value) => {
        setInput(value);
    };

    const handleClick = () => {
        if (!input.trim()) {
            return;
        }

        addTodoAsync(input);
        setInput('');
    };

    return (
        <div className='add-todo'>
            <Input
                className='todo-input'
                placeholder='Todo Content'
                value={input}
                allowClear
                onChange={(e) => updateInput(e.target.value)}
            />
            <Button
                className='add-todo-button'
                type='normal'
                shape='circle'
                icon='plus'
                onClick={handleClick}
            />
        </div>
    );
}

// <AddTodo />组件绑定addTodo动作作为props
export default connect(
    null,
    { addTodoAsync }
)(AddTodo);
