import React from 'react';
import { Provider } from 'react-redux';

import RcQueueAnim from 'rc-queue-anim';

import AddTodo from './AddTodo';
import FilterCard from './FilterCard';

import './TodoListApp.css';


export default ({ store }) => (
    <RcQueueAnim
        type='top'
        delay={200}
        duration={600}
        component={Provider}
        componentProps={{ store: store }}
    >
        <AddTodo key='content-1' />
        <FilterCard key='content-2' />
    </RcQueueAnim>
);
