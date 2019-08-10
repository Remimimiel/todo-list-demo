import { call, put, select, takeEvery } from 'redux-saga/effects';

import { TOGGLE_TODO, TOGGLE_TODO_ASYNC } from '../actions/actionTypes';
import { getTodos } from '../selectors';
import api from '../api';


function* toggleTodo(action) {
    const { id } = action.payload;
    const todo = (yield select(getTodos)).filter((todo) => todo.id === id)[0];
    const data = { id, content: todo.content, completed: !todo.completed };

    try {
        yield call(api.todo.update, id, data);
        yield put({
            type: TOGGLE_TODO,
            payload: {
                id
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export default function*() {
    yield takeEvery(TOGGLE_TODO_ASYNC, toggleTodo);
};
