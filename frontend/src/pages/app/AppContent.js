import React from 'react';

import { Layout } from 'antd';

import Routes from './Routes';

const { Content } = Layout;


export default ({ store }) => (
    <Content className='app-content'>
        <Routes store={store} />
    </Content>
);
