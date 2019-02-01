import { ActionTypes as types } from '../constants';
import {User} from'../../models/graphql/user';

const user = new User();
const defaultState = {
    user
};

function loginreducer(state = defaultState, action: any) {
    switch (action.type) {
        case (types.USER_LOGIN):
         return Object.assign(defaultState, state, {
            user: action.data.user // New message
          });
            // return {...state, user: action.data.user}

        case (types.USER_LOGOUT):
        defaultState.user = null;
            return defaultState;
            // return Object.assign({}, state, {
            //     user: {username:"", password:""} });
            //return {...state, user: {username:"", password:""}}
            //return {...state, todos: [...state.todos.filter((it, index) => index !== action.payload)]}
        default:
            return state;
    }
}

export {loginreducer};
