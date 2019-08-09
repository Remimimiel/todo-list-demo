import React from 'react';
import { Provider } from 'react-redux';

import VisibilityFilter from './VisibilityFilter';
import AddTodo from './AddTodo';

import '../styles.css';


const App = ({ store }) => (
    // 通过<Provider />组件将store传递给children组件
    // react-redux会自动进行store.dispatch(action)
    <Provider store={store}>
        <div className='todo-app'>
            <h1 className='todo-head'>Todo List</h1>
            <AddTodo />
            <VisibilityFilter />
        </div>
    </Provider>
);

export default App;
