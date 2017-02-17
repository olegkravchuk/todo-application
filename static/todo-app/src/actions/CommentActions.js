import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAIL,

    //RESET_COMMENT
} from '../constants/Comment'


export function createComment(comment) {
    return {
        types: [POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL],
        payload: {
            request:{
                url: 'comments/',
                method: 'post',
                data: comment
            }
        }
    }
}

//export function resetComment() {
//    return {
//        types: [RESET_COMMENT],
//        payload: ''
//    }
//}