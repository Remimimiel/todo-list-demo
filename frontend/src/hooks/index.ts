import { useSelector, shallowEqual } from 'react-redux';

import State from '../types/State';


export const useShallowEqualSelector = (selector: (state: State) => any) =>
    useSelector(selector, shallowEqual);
