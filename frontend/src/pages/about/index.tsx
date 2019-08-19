import React from 'react';

import RcQueueAnim from 'rc-queue-anim';

import './About.css';


export default () => (
    <RcQueueAnim
        type='alpha'
        delay={200}
    >
        <h1
            className='about-title'
            key='h1-0'
        >
            About
        </h1>
    </RcQueueAnim>

);
