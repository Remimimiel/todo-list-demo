import React from 'react';
import { Provider } from 'react-redux';

import RcQueueAnim from 'rc-queue-anim';

import AddTodo from './AddTodo';
import VisibilityFilter from './VisibilityFilter';

import './TodoApp.css';


export default ({ store }) => (
    <RcQueueAnim
        type='top'
        delay={200}
        duration={600}
        component={Provider}
        componentProps={{ store: store }}
    >
        <AddTodo key='content-1' />
        <VisibilityFilter key='content-2' />
    </RcQueueAnim>
);
