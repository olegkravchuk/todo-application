import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAIL,

    //RESET_COMMENT
} from '../constants/Comment'


export const initialCommentState = {
    id: '',
    text: '',
    todo: ''
};

const initialState = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    error: '',
    loading: false
};


export default function comment(state=initialState, action){
    switch (action.type){
        case POST_COMMENT_REQUEST:
            return {...state, loading: true};
        case POST_COMMENT_SUCCESS:
            return {...state, results: [action.payload.data], loading: false};
        case POST_COMMENT_FAIL:
            return {...state, error: action.error.response.data, loading: false};
        default:
            return state
}
}