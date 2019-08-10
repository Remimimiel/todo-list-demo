import { all } from 'redux-saga/effects';

import addTodoSaga from './addTodoSaga';
import toggleTodoSaga from './toggleTodoSaga';


export default function*() {
    yield all([
        addTodoSaga(),
        toggleTodoSaga()
    ]);
};
