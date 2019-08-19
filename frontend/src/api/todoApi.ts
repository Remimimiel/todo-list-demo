import axios from 'axios';

import host from './host';

import Todo from '../types/Todo';


const baseUrl: string = 'http://' + host + ':8000/todo-list/';
const detailUrl = (id: number) => baseUrl + 'todo/' + id + '/';
const listUrl = () => baseUrl + 'todo/';

const list = () => axios.get(listUrl());
const retreive = (id: number) => axios.get(detailUrl(id));
const create = (data: Todo) => axios.post(listUrl(), data);
const update = (id: number, data: Todo) => axios.put(detailUrl(id), data);
const remove = (id: number) => axios.delete(detailUrl(id));

export default {
    list, retreive, create, update, remove
};
