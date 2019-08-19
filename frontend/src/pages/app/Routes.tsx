import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loading from './Loading';

import Store from '../../types/Store';

const TodoApp = lazy(() => import('../todoList'));
const Click = lazy(() => import('../click'));
const About = lazy(() => import('../about'));


export interface RoutesProps {
    store: Store;
};

export default (props: RoutesProps) => (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Redirect exact from='/' to='/todo' />
            <Route exact path='/todo' render={() => (
                <TodoApp store={props.store} />
            )} />
            <Route exact path='/click' component={Click} />
            <Route exact path='/about' component={About} />
        </Switch>
    </Suspense>
);
