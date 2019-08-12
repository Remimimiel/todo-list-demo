import React, { useState, useEffect } from 'react';

import { Button } from 'antd';

import './Click.css';


export default () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You click ${count} times.`
    }, [count]);

    return (
        <div className='click-demo'>
            <Button
                type='primary'
                shape='round'
                icon='check'
                onClick={() => setCount(count + 1)}
            >
                Click
            </Button>
        </div>
    );
}