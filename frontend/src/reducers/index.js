import { combineReducers } from 'redux';

import todos from './todos';


// 组合底层reducer为根reducer
export default combineReducers({
    todos,
});
