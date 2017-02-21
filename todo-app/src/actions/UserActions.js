import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAIL,
    REGISTER_SUCCESS

} from '../constants/User'

export function login(user) {
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

export function register(user) {
    return {
    types: [REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL],
        payload: {
            request:{
                method: 'post',
                url:'users/',
                data: user
            }
        }
    }
}