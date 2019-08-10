import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import App from './pages';
import reducer from './reducers';
import saga from './sagas';
import api from './api';
import { VISIBILITY_FILTER } from './utils/constants';


const startApp = () => {
    api.todo.list().then((response) => {
        // load data from database
        let preLoadState = null;
        if (response.status === 200) {
            preLoadState = {
                todos: response.data,
                visibilityFilter: VISIBILITY_FILTER.ALL
            };
        }

        // apply saga middleware
        const sagaMiddleware = createSagaMiddleware();
        const enhancer = applyMiddleware(sagaMiddleware);
        // create store
        const store = createStore(reducer, preLoadState, enhancer);
        // run saga
        sagaMiddleware.run(saga);

        let root = document.getElementById('root');
        ReactDOM.render(
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>,
            root);
    }).catch(err => console.log(err));
}

startApp();
