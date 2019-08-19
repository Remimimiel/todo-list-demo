import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getTodos } from '../selectors';
import api from '../api';

import Todo from '../types/Todo';
import Action from '../types/Action';
import ActionTypes from '../types/ActionTypes';


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
            type: ActionTypes.TOGGLE_TODO,
            payload: {
                id
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export default function* () {
    yield takeEvery(ActionTypes.TOGGLE_TODO_ASYNC, toggleTodo);
};
