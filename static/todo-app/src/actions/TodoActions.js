import {
    GET_TODOS_REQUEST,
    GET_TODOS_FAIL,
    GET_TODOS_SUCCESS,
    POST_TODOS_REQUEST,
    POST_TODOS_SUCCESS,
    POST_TODOS_FAIL
} from '../constants/Todo'


export function getTodos() {
    return {
        types: [GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAIL],
        payload: {
            request:{
                url: 'todos/'
            }
        }
    }
}


export function cteateTodo(todo) {
    var copy = {...todo, status: JSON.parse(todo.status)};
    return {
        types: [POST_TODOS_REQUEST, POST_TODOS_SUCCESS, POST_TODOS_FAIL],
        payload: {
            request:{
                url: 'todos/',
                method: 'post',
                data: copy
            }
        }
    }
}