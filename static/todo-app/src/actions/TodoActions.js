import {
    GET_TODOS_REQUEST,
    GET_TODOS_FAIL,
    GET_TODOS_SUCCESS,
    POST_TODOS_REQUEST,
    POST_TODOS_SUCCESS,
    POST_TODOS_FAIL,
    CHANGE_STATUS_CREATED
} from '../constants/Todo'


export function getTodos(filter={}) {
    return {
        types: [GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAIL],
        payload: {
            request:{
                url: 'todos/',
                params: filter
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

export function updateTodo(todo) {
    var copy = {...todo, status: JSON.parse(todo.status)};
    return {
        types: [POST_TODOS_REQUEST, POST_TODOS_SUCCESS, POST_TODOS_FAIL],
        payload: {
            request:{
                url: 'todos/' + copy.id + '/',
                method: 'put',
                data: copy
            }
        }
    }
}

export function changeStatusCreatedTodo(created=false) {
    return {
        type: CHANGE_STATUS_CREATED,
        payload: created
    }
}