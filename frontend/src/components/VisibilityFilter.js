import React from 'react';
import { connect } from 'react-redux';

import { Card } from 'antd';

import setFilter from '../actions/setFilter';
import { VISIBILITY_FILTER } from '../utils/constants';
import TodoList from './TodoList';


// 卡片切换tab的key和标题
const tabList = [{
        key: VISIBILITY_FILTER.ALL,
        tab: 'All',
    }, {
        key: VISIBILITY_FILTER.COMPLETED,
        tab: 'Completed'
    }, {
        key: VISIBILITY_FILTER.INCOMPLETE,
        tab: 'Incomplete'
    }
];

const VisibilityFilter = ({ activeFilter, setFilter }) => (
    <div className='visibility-filter'>
        <Card
            className='filter-card'
            tabList={tabList}
            activeTabKey={activeFilter}
            onTabChange={(key) => setFilter(key)}
        >
            <TodoList />
        </Card>
    </div>
);

// <VisibilityFilter />组件绑定filter状态和setFilter动作作为props
export default connect(
    state => ({ activeFilter: state.visibilityFilter }),
    {setFilter}
)(VisibilityFilter);
