import React from 'react';
import { Link } from 'react-router-dom';
import { History } from 'history';

import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;


export interface AppHeaderProps {
    history: History;
};

export default (props: AppHeaderProps) => (
    <Header>
        <Menu
            className='app-header'
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['todo']}
            selectedKeys={[props.history.location.pathname]}
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
    </Header>
);
