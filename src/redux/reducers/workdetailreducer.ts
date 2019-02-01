import { ActionTypes as types } from '../constants';

const workId: number = 0;
const defaultState = {
    workId
};

function workdetailreducer(state = defaultState, action: any) {
    switch (action.type) {
        case (types.WORKDETAIL):
         return Object.assign(defaultState, state, {
            workId: action.data.workId // New message
          });
            // return {...state, user: action.data.user}
        default:
            return state;
    }
}

export {workdetailreducer};
