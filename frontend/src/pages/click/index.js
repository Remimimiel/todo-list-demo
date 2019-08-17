import React, { useState, useEffect } from 'react';

import { Button } from 'antd';
import RcQueueAnim from 'rc-queue-anim';

import './Click.css';


export default () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You click ${count} times.`
    }, [count]);

    return (
        <RcQueueAnim
            className='click-demo'
            type='alpha'
            delay={200}
        >
            <div key='button-0'>
                <Button
                    type='primary'
                    shape='round'
                    icon='check'
                    onClick={() => setCount(count + 1)}
                >
                    Click
                </Button>
            </div>
        </RcQueueAnim>
    );
}