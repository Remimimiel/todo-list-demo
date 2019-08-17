import { call, put, takeEvery } from 'redux-saga/effects';

import { ADD_TODO, ADD_TODO_ASYNC } from '../constants/actionTypes'
import api from '../api';


function* addTodo(action) {
    const { content } = action.payload;
    const data = {
        content,
        completed: false
    };

    try {
        yield call(api.todo.create, data);
        yield put({
            type: ADD_TODO,
            payload: {
                id: -1,
                content,
                completed: false
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export default function*() {
    yield takeEvery(ADD_TODO_ASYNC, addTodo);
};
