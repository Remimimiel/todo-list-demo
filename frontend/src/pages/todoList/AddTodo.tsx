import React, { useState, useCallback } from 'react';
import { Input, Button } from 'antd';

import { useDispatch } from 'react-redux';
import addTodoAsync from '../../actions/addTodo';


export default () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addTodoAsyncCallback = useCallback(
        (content: string) => dispatch(addTodoAsync(content)),
        [dispatch]
    );

    const handleClick = () => {
        if (!input.trim()) {
            return;
        }

        addTodoAsyncCallback(input);
        setInput('');
    };

    return (
        <div className='add-todo'>
            <Input
                className='todo-input'
                placeholder='Todo Content'
                value={input}
                allowClear
                onChange={(e) => setInput(e.target.value)}
            />
            <Button
                className='add-todo-button'
                shape='circle'
                icon='plus'
                onClick={handleClick}
            />
        </div>
    );
};
