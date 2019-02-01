import { ActionTypes as types } from './constants';
import {User} from'../models/graphql/user';
export function userlogin(user: User) {
  return {
    type:types.USER_LOGIN,
    data:{user}
  };
}

export function userlogout() {
    return {
      type:types.USER_LOGOUT,
      data:{user: {}}
    };
  }

export function error(error: any) {
    return {
      type:types.ERROR,
      data:{error}
    };
  }

  export function workdetail(workId: number) {
    return {
      type:types.WORKDETAIL,
      data:{workId}
    };
  }
