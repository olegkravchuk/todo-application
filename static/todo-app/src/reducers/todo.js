import {
  GET_TODOS_REQUEST,
  GET_TODOS_FAIL,
  GET_TODOS_SUCCESS,
} from '../constants/Todo'

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    error: '',
    loading: false
};

export default function todo(state=initialState, action){
    console.log('aaaa', action);
    switch (action.type){
        case GET_TODOS_REQUEST:
            return {...state, loading: true};
        case GET_TODOS_SUCCESS:
            return {...state, ...action.payload.data, loading: false};
        case GET_TODOS_FAIL:
            return {...state, error: action.payload.data.detail, loading: false};
        default:
            return state
    }
}