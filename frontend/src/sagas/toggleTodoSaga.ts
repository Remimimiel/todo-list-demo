import { call, put, select, takeEvery } from 'redux-saga/effects';

import { TOGGLE_TODO, TOGGLE_TODO_ASYNC } from '../constants/actionTypes';
import { getTodos } from '../selectors';
import api from '../api';

import Todo from '../types/Todo';
import Action from '../types/Action';


function* toggleTodo(action: Action) {
    const { id } = action.payload;
    const todo: Todo = (yield select(getTodos)).filter((todo: Todo) =>
        todo.id === id)[0];
    const data: Todo = {
        id,
        content: todo.content,
        completed: !todo.completed
    };

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

export default function* () {
    yield takeEvery(TOGGLE_TODO_ASYNC, toggleTodo);
};
