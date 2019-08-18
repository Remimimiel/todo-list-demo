import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loading from './Loading';

const TodoApp = lazy(() => import('./todoApp'));
const Click = lazy(() => import('./click'));
const About = lazy(() => import('./about'));


export default ({ store }) => (
    <Suspense fallback={<Loading />}>
        <Switch>
            <Redirect exact from='/' to='/todo' />
            <Route exact path='/todo' render={() => (
                <TodoApp store={store} />
            )} />
            <Route exact path='/click' component={Click} />
            <Route exact path='/about' component={About} />
        </Switch>
    </Suspense>
);
