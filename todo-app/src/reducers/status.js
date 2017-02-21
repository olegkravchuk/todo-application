import {
    GET_STATUSES_REQUEST,
    GET_STATUSES_FAIL,
    GET_STATUSES_SUCCESS,

    POST_STATUS_REQUEST,
    POST_STATUS_SUCCESS,
    POST_STATUS_FAIL,

    CHANGE_STATUS_CREATED,

    DELETE_STATUS_REQUEST,
    DELETE_STATUS_SUCCESS,
    DELETE_STATUS_FAIL
} from '../constants/Status'


const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    error: '',
    loading: false,
    created: false
};


export const initialStatusState = {
    name: '',
    code: ''
};

export default function status(state=initialState, action){
    switch (action.type){
        case GET_STATUSES_REQUEST:
            return {...state, loading: true};
        case GET_STATUSES_SUCCESS:
            return {...state, ...action.payload.data, loading: false};
        case GET_STATUSES_FAIL:
            return {...state, error: action.payload.data.detail, loading: false};

        case POST_STATUS_REQUEST:
            return {...state, loading: true, created: false};
        case POST_STATUS_SUCCESS:
            var results = state.results;
            results.push(action.payload.data);
            return {...state, results: results, count: results.length, loading: false, created: true};
        case POST_STATUS_FAIL:
            return {...state, error: action.error.response.data, loading: false, created: false};

        case DELETE_STATUS_REQUEST:
            return {...state, loading: true, created: false};
        case DELETE_STATUS_SUCCESS:
            return {...state};
        case DELETE_STATUS_FAIL:
            return {...state, error: action.error.response.data, loading: false, created: false};

        case CHANGE_STATUS_CREATED:
            return {...state, created: action.payload};
        default:
            return state
    }
}