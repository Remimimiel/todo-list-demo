import React from 'react';
import { withRouter } from 'react-router-dom';

import { Layout } from 'antd';

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

import './App.css';


const App = ({ store, history }) => (
    <Layout className='app'>
        <AppHeader history={history} />
        <AppContent store={store} />
        <AppFooter />
    </Layout>
);

export default withRouter(App);
