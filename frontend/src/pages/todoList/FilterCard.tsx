import React, { useState } from 'react';

import { Card } from 'antd';

import { VISIBILITY_FILTER } from '../../constants/visibilityFilter';
import TodoList from './TodoList';


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
