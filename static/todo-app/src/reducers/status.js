import {
  GET_STATUSES_REQUEST,
  GET_STATUSES_FAIL,
  GET_STATUSES_SUCCESS,
} from '../constants/Status'


const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    error: '',
    loading: false
};

export default function todo(state=initialState, action){
    switch (action.type){
        case GET_STATUSES_REQUEST:
            return {...state, loading: true};
        case GET_STATUSES_SUCCESS:
            return {...state, ...action.payload.data, loading: false};
        case GET_STATUSES_FAIL:
            return {...state, error: action.payload.data.detail, loading: false};
        default:
            return state
    }
}