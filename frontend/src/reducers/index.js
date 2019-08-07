import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'


// 组合底层reducer为根reducer
export default combineReducers({
    todos,
    visibilityFilter
});
