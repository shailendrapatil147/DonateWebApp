import { ActionTypes as types } from './constants';
import {User} from'../models/graphql/user';
export function userlogin(user: User) {
  return {
    type:types.USER_LOGIN,
    data:{user: user}
  }
}

export function userlogout() {
    return {
      type:types.USER_LOGOUT,
      data:{user: {}}
    }
  }

export function error(error: any) {
    return {
      type:types.ERROR,
      data:{error: error}
    }
  }

