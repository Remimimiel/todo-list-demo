export interface Payload {
    [propName: string]: any;
};

export default interface Action {
    type: string;
    payload: Payload;
};
