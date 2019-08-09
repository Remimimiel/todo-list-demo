import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


import App from './components';
import todoApp from './reducers';
import { list } from './api/todoApi';
import { VISIBILITY_FILTER } from './utils/constants';


const startApp = () => {
    list().then((response) => {
        let preLoadState = null;
        if (response.status === 200) {
            preLoadState = {
                todos: response.data,
                visibilityFilter: VISIBILITY_FILTER.ALL
            };
        }
        const store = createStore(todoApp, preLoadState);

        let root = document.getElementById('root');
        ReactDOM.render(<App store={store} />, root);
    }).catch(err => console.log(err));
}

startApp();
