import React, { lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CacheSwitch, CacheRoute } from 'react-router-cache-route';

import Loading from './Loading';

const TodoApp = lazy(() => import('./todoApp'));
const Click = lazy(() => import('./click'));
const About = lazy(() => import('./about'));


export default ({ store }) => (
    <Suspense fallback={<Loading />}>
        <CacheSwitch>
            <Redirect exact from='/' to='/todo' />
            <Route exact path='/todo' render={() => (
                <TodoApp store={store} />
            )} />
            <Route exact path='/click' component={Click} />
            <CacheRoute exact path='/about' component={About} />
        </CacheSwitch>
    </Suspense>

);