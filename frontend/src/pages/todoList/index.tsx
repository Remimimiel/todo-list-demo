import React from 'react';
import { Provider } from 'react-redux';

import RcQueueAnim from 'rc-queue-anim';

import AddTodo from './AddTodo';
import FilterCard from './FilterCard';

import Store from '../../types/Store';

import './TodoListApp.css';


export interface TodoListAppProps {
    store: Store;
};

export default (props: TodoListAppProps) => (
    <RcQueueAnim
        type='top'
        delay={200}
        duration={600}
        component={Provider}
        componentProps={{ store: props.store }}
    >
        <AddTodo key='content-1' />
        <FilterCard key='content-2' />
    </RcQueueAnim>
);
