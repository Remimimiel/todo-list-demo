import { SET_FILTER } from '../actions/actionTypes';
import { VISIBILITY_FILTER } from '../utils/constants';


let initialState = VISIBILITY_FILTER.ALL;

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
};

export default visibilityFilter;
