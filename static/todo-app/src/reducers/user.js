import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

export const initialState = {
    username: '',
    password: '',
    error: {}
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            console.log('LOGIN_REQUEST', action.payload);
            return {...state};
        case LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS', action.payload);
            return {...state};
        case LOGIN_FAIL:
            console.log('LOGIN_FAIL', action.payload);
            return {...state, error: action.error.response.data};
        case LOGOUT_SUCCESS:
            console.log('LOGOUT_SUCCESS', action.payload);
            return {...state};
        default:
            return state
    }
}