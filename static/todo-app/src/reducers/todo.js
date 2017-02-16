import {
    GET_TODOS_REQUEST,
    GET_TODOS_FAIL,
    GET_TODOS_SUCCESS,

    POST_TODOS_REQUEST,
    POST_TODOS_SUCCESS,
    POST_TODOS_FAIL,

    PUT_TODOS_REQUEST,
    PUT_TODOS_SUCCESS,
    PUT_TODOS_FAIL,

    CHANGE_STATUS_CREATED
} from '../constants/Todo'

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    error: '',
    loading: false,
    created: false
};

export const initialTodoState = {
    id: '',
    name: '',
    description: '',
    status: {}
};

export default function todo(state=initialState, action){
    switch (action.type){
        case GET_TODOS_REQUEST:
            return {...state, loading: true, created: false};
        case GET_TODOS_SUCCESS:
            return {...state, ...action.payload.data, loading: false, created: false};
        case GET_TODOS_FAIL:
            return {...state, error: action.payload.data.detail, loading: false, created: false};

        case POST_TODOS_REQUEST:
            return {...state, loading: true, created: false};
        case POST_TODOS_SUCCESS:
            var results = state.results;
            results.unshift(action.payload.data);
            return {...state, results: results, count: results.length, loading: false, created: true};
        case POST_TODOS_FAIL:
            return {...state, error: action.error.response.data, loading: false, created: false};

        case PUT_TODOS_REQUEST:
            return {...state, loading: true, created: false};
        case PUT_TODOS_SUCCESS:
            for(var i = 0; i < state.results.length; i++){
                if (state.results[i].id == action.payload.data.id) {
                    state.results[i] = action.payload.data;
                    break
                }
            }
            return {...state, loading: false, created: true};
        case PUT_TODOS_FAIL:
            return {...state, error: action.error.response.data, loading: false, created: false};

        case CHANGE_STATUS_CREATED:
            return {...state, loading: false, created: action.payload};
        default:
            return state
    }
}