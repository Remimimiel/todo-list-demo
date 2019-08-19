import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

import { Layout } from 'antd';

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

import Store from '../../types/Store';

import './App.css';


export interface AppProps extends RouteComponentProps {
    store: Store;
    history: History;
};

const App = (props: AppProps) => (
    <Layout className='app'>
        <AppHeader history={props.history} />
        <AppContent store={props.store} />
        <AppFooter />
    </Layout>
);

export default withRouter(App);
