import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';

import Router from './Router';

import './App.css';


const AppHeader = ({ history }) => (
    <Layout.Header>
        <Menu
            className='app-header'
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['todo']}
            selectedKeys={[history.location.pathname]}
        >
            <Menu.Item key='todo'>
                <Link to='/todo'>
                    <Icon type="check-circle" />
                    Todo
                </Link>
            </Menu.Item>
            <Menu.Item key='click'>
                <Link to='/click'>
                    <Icon type='up-circle' />
                    Click-demo
                </Link>
            </Menu.Item>
            <Menu.Item key='about'>
                <Link to='/about'>
                    <Icon type="info-circle" />
                    About
                </Link>
            </Menu.Item>
        </Menu>
    </Layout.Header>
);

const AppContent = ({ store }) => (
    <Layout.Content className='app-content'>
        <Router store={store} />
    </Layout.Content>
);

const AppFooter = () => (
    <Layout.Footer className='app-footer'>
        zx55 © All rights reserved.
    </Layout.Footer>
);

const App = ({ store, history }) => (
    <Layout className='app'>
        <AppHeader history={history} />
        <AppContent store={store} />
        <AppFooter />
    </Layout>
);

export default withRouter(App);
