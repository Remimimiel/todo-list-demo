import axios from 'axios';


const baseUrl = 'http://localhost:8000/todo-list/'

const todo = {
    detail: (id) => baseUrl + 'todo/' + id + '/',
    list: () => baseUrl + 'todo/'
};

const list = () => {
    return axios.get(todo.list());
};

const retreive = (id) => {
    return axios.get(todo.detail(id));
};

const create = (data) => {
    return axios.post(todo.list(), data);
};

const update = (id, data) => {
    return axios.put(todo.detail(id), data);
};

const remove = (id) => {
    return axios.delete(todo.detail(id));
};

export default {
    list, retreive, create, update, remove
};