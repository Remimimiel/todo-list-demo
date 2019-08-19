import React from 'react';

import { Layout } from 'antd';

import Routes from './Routes';

import Store from '../../types/Store';

const { Content } = Layout;


export interface AppContentProps {
    store: Store;
};

export default (props: AppContentProps) => (
    <Content className='app-content'>
        <Routes store={props.store} />
    </Content>
);
