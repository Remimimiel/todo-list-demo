# todo-list-demo

A simple demo for learning typescript, react, redux, antd and django-rest-framework.

**Note:** You can check frontend code in javascript by switching branch to `js`.

## Run demo

1. Run django server first

    ```sh {.line-numbers}
    cd backend
    python manage.py runserver
    ```

    **Note:** You have to satisfy the pre-requisities in [Backend README.md](backend/README.md)

2. Run frontend

    ```sh {.line-numbers}
    cd frontend
    yarn start
    ```

    or you want to deploy frontend on the server

    ```sh {.line-numbers}
    cd frontend
    serve build -s -l 80
    ```

    **Note:** You have to satisfy the pre-requisities in [Frontend README.md](frontend/README.md)

Thanks to

* [redux doc](https://redux.js.org/basics/example)

* [react-redux doc](https://react-redux.js.org/introduction/basic-tutorial)

* [react-redux hook api](https://github.com/reduxjs/react-redux/blob/master/docs/api/hooks.md)

* [redux-saga doc](https://redux-saga.js.org/)

* [redux-saga tutorial](https://github.com/redux-saga/redux-saga-beginner-tutorial/tree/sagas)

* [react-antd doc](https://ant.design/docs/react/introduce)

* [reselect doc](https://github.com/reduxjs/reselect/blob/master/README.md)

If there are any problem, you can raise an issue on GitHub or contact me through email.

Email: czr.cn.525@gmail.com
