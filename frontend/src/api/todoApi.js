import axios from 'axios';

import api from './apiList';


const list = () => {
    return axios.get(api.todo.list());
};

const retreive = (id) => {
    return axios.get(api.todo.detail(id));
};

const create = (data) => {
    return axios.post(api.todo.list(), data);
};

const update = (id, data) => {
    return axios.put(api.todo.detail(id), data);
};

const remove = (id) => {
    return axios.delete(api.todo.detail(id));
};

export default {
    list, retreive, create, update, remove
};