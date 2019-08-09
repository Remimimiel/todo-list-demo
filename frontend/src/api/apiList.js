const todoBaseUrl = 'http://localhost:8000/todo-list/'

const todo = {
    detail: (id) => todoBaseUrl + 'todo/' + id,
    list: () => todoBaseUrl + 'todo/'
};

export default {
    todo
};