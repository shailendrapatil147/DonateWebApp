import { ActionTypes as types } from '../constants';
const defaultState = {
    error: String
};

function errorreducer(state = defaultState, action: any) {
    switch (action.type) {
        case (types.ERROR):
         return Object.assign(defaultState, state, {
            error: action.data.error // New message
          });

        default:
            return state;
    }
}

export {errorreducer};