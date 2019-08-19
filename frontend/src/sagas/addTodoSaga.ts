import { call, put, takeEvery } from 'redux-saga/effects';

import api from '../api';

import Todo from '../types/Todo';
import Action from '../types/Action';
import ActionTypes from '../types/ActionTypes';


function* addTodo(action: Action) {
    const { content } = action.payload;
    const data: Todo = {
        id: 0,
        content,
        completed: false
    };

    try {
        yield call(api.todo.create, data);
        yield put({
            type: ActionTypes.ADD_TODO,
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
    yield takeEvery(ActionTypes.ADD_TODO_ASYNC, addTodo);
};
