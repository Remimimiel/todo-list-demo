import { createStore } from 'redux';

import todoApp from '../reducers';
import { ADD_TODO } from '../actions/actionTypes'


// 使用合成的根reducer来创建state树，即store
export const getStore = () => {
    return createStore(todoApp);
};

// 将数据库中的所有Todo添加到store中
export const dispatchFromDB = (todos, store) => {
    for (let i = 0; i < todos.length; ++i) {
        const { id, content, completed } = todos[i];
        store.dispatch({
            type: ADD_TODO,
            payload: {
                id, content, completed
            }
        });
    }
};
