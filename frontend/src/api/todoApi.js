import axios from 'axios';

import api from './apiList';


export const list = () => {
    return axios.get(api.todo.list());
};

export const retreive = (id) => {
    return axios.get(api.todo.detail(id));
};

export const create = (data) => {
    return axios.post(api.todo.list(), data);
};

export const update = (id, data) => {
    return axios.put(api.todo.detail(id), data);
};

export const remove = (id) => {
    return axios.delete(api.todo.detail(id));
};
