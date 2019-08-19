import React, { useState } from 'react';

import { Card } from 'antd';

import TodoList from './TodoList';

import FilterEnum from '../../types/FilterEnum';


const tabList = [{
        key: FilterEnum.ALL,
        tab: 'All',
    }, {
        key: FilterEnum.COMPLETED,
        tab: 'Completed'
    }, {
        key: FilterEnum.INCOMPLETE,
        tab: 'Incomplete'
    }
];

export default () => {
    const [filter, setFilter] = useState(FilterEnum.ALL);

    return (
        <div className='visibility-filter'>
            <Card
                className='filter-card'
                tabList={tabList}
                activeTabKey={filter}
                onTabChange={(key) => setFilter(key as FilterEnum)}
            >
                <TodoList filter={filter} />
            </Card>
        </div>
    );
};
