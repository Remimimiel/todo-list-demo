import React from 'react';

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

class VisibilityFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFilter: VISIBILITY_FILTER.ALL
        };
    }

    setFilter = (key) => {
        this.setState({
            activeFilter: key
        });
    }

    render() {
        return (
            <div className='visibility-filter'>
                <Card
                    className='filter-card'
                    tabList={tabList}
                    activeTabKey={this.state.activeFilter}
                    onTabChange={(key) => this.setFilter(key)}
                >
                    <TodoList visibilityFilter={this.state.activeFilter} />
                </Card>
            </div>
        );
    }
}

export default VisibilityFilter;
