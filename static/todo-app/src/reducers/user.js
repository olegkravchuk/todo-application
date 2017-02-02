import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from '../constants/User'
import jwt_decode from 'jwt-decode'


export const initialState = {
    username: '',
    id: '',
    email: '',
    jwt: '',
    error: {},
    loading: false,
    ...decodeToken()
};

export const initialAuthState = {
    username: '',
    password: ''
};

export const initialRegisterState = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
};

export default function user(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true};
        case LOGIN_SUCCESS:
            sessionStorage.setItem('jwt', action.payload.data.token);
            return {...state, ...action.payload.data.user, error: {}, jwt: action.payload.data.token, loading: false};
        case LOGIN_FAIL:
            return {...state, error: action.error.response.data, loading: false};

        case LOGOUT_SUCCESS:
            sessionStorage.removeItem('jwt');
            return {...state, ...initialState, username: '', id: '', email: '', jwt: ''};

        case REGISTER_REQUEST:
            return {...state, loading: true};
        case REGISTER_FAIL:
            return {...state, error: action.error.response.data, loading: false};
        case REGISTER_SUCCESS:
            sessionStorage.setItem('jwt', action.payload.data.jwt);
            return {...state, ...action.payload.data, loading: false};

        default:
            return state
    }
}


export function getToken(){
    return sessionStorage.jwt || ''
}

export function decodeToken(){
    if (sessionStorage.jwt){
        let token = jwt_decode(sessionStorage.jwt);
        return {
            username: token.username,
            id: token.user_id,
            email: token.email,
            jwt: sessionStorage.jwt
        }
    }

}