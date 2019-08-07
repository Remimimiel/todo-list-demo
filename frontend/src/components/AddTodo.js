import React from 'react';
import { connect } from 'react-redux';

import { Input, Button } from 'antd';

import addTodo from '../actions/addTodo';


class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    handleInput = (input) => {
        this.setState({
            input: input
        });
    }

    handleSubmit = () => {
        if (!this.state.input.trim()) {
            return;
        }

        this.props.addTodo(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <div>
                <Input
                    className='todo-input'
                    placeholder='Todo Content'
                    value={this.state.input}
                    allowClear
                    onChange={(e) => this.handleInput(e.target.value)}
                />
                <Button
                    className='add-todo-button'
                    type='normal'
                    shape='circle'
                    icon='plus'
                    onClick={this.handleSubmit}
                />
            </div>
        )
    }
}

// <AddTodo />组件绑定addTodo动作作为props
export default connect(
    null,
    { addTodo }
)(AddTodo);
