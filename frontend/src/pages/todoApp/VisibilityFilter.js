import React, { useState } from 'react';

import { Card } from 'antd';

import { VISIBILITY_FILTER } from '../../utils/constants';
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

export default () => {
    const [filter, setFilter] = useState(VISIBILITY_FILTER.ALL);

    return (
        <div className='visibility-filter'>
            <Card
                className='filter-card'
                tabList={tabList}
                activeTabKey={filter}
                onTabChange={(key) => setFilter(key)}
            >
                <TodoList visibilityFilter={filter} />
            </Card>
        </div>
    );
};
