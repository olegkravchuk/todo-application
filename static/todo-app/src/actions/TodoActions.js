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

    DELETE_TODOS_REQUEST,
    DELETE_TODOS_SUCCESS,
    DELETE_TODOS_FAIL,

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
    return {
        types: [POST_TODOS_REQUEST, POST_TODOS_SUCCESS, POST_TODOS_FAIL],
        payload: {
            request:{
                url: 'todos/',
                method: 'post',
                data: todo
            }
        }
    }
}

export function updateTodo(todo) {
    return {
        types: [PUT_TODOS_REQUEST, PUT_TODOS_SUCCESS, PUT_TODOS_FAIL],
        payload: {
            request:{
                url: 'todos/' + todo.id + '/',
                method: 'put',
                data: todo
            }
        }
    }
}

export function deleteTodo(todo) {
    return {
        types: [DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, DELETE_TODOS_FAIL],
        payload: {
            request:{
                url: 'todos/' + todo.id + '/',
                method: 'delete'
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