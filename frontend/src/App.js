import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers'
import VisibilityFilter from './components/VisibilityFilter'
import AddTodo from './components/AddTodo'

import './styles.css'


// 使用合成的根reducer来创建state树，即store
let store = createStore(todoApp);

const App = () => (
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
