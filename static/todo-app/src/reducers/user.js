import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

export const initialState = {
    username: '',
    jwt: '',
    error: {}
};

export const initialAuthState = {
    username: '',
    password: ''
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state};
        case LOGIN_SUCCESS:
            sessionStorage.setItem('jwt', action.payload.data.token);
            return {...state, error: {}, jwt: action.payload.data.token};
        case LOGIN_FAIL:
            return {...state, error: action.error.response.data};
        case LOGOUT_SUCCESS:
            console.log('LOGOUT_SUCCESS', action.payload);
            return {...state};
        default:
            return state
    }
}


export function getToken(){
    return sessionStorage.jwt || ''
}