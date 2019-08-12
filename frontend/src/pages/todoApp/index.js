import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo';
import VisibilityFilter from './VisibilityFilter';

import './TodoApp.css';


export default ({ store }) => (
    <Provider store={store}>
        <AddTodo />
        <VisibilityFilter />
    </Provider>
);
