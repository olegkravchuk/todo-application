import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

export function login(user) {
    console.log(user, 'sdsdsdsdsds');
    return {
        types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL],
        payload: {
            request:{
                method: 'post',
                url:'api-token-auth/',
                data: user
            }
        }
    }
}

export function logout() {
    return {
        type: LOGOUT_SUCCESS
    }
}
