import ActionTypes from './ActionTypes';


export interface Payload {
    [propName: string]: any;
};

export default interface Action {
    type: ActionTypes;
    payload: Payload;
};
