import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { getStore, dispatchFromDB } from './utils/store';
import { list } from './api/todoApi';


const startApp = () => {
    let store = getStore();
    let root = document.getElementById('root');

    list().then((response) => {
        if (response.status === 200) {
            dispatchFromDB(response.data, store);
        }
        ReactDOM.render(<App store={store} />, root);
    }).catch(err => console.log(err));
}

startApp();
