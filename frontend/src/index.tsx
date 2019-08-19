import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './pages/app';
import getStore from './store';
import api from './api';

import { DeepPartial } from 'redux';
import State from './types/State';


const startApp = () => {
    api.todo.list().then((response) => {
        let preLoadedState: DeepPartial<State> = {
            todos: [],
        };
        if (response.status === 200) {
            preLoadedState.todos = response.data;
        }

        const store = getStore(preLoadedState);
        ReactDOM.render(
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>,
            document.getElementById('root')
        );
    }).catch((err) => console.log(err));
};

startApp();
