import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './pages/app';
import getStore from './store';
import api from './api';


const startApp = () => {
    api.todo.list().then((response) => {
        // load data from database
        let preLoadState = null;
        if (response.status === 200) {
            preLoadState = { todos: response.data };
        }

        const store = getStore(preLoadState);
        ReactDOM.render(
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>,
            document.getElementById('root'));
    }).catch(err => console.log(err));
}

startApp();
