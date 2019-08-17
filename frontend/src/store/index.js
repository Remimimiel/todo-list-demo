import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
import saga from '../sagas';


export default (preLoadState) => {
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = process.env.NODE_ENV === 'development' ?
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        ) : applyMiddleware(sagaMiddleware);
    const store = createStore(reducer, preLoadState, enhancer);
    sagaMiddleware.run(saga);

    return store;
}