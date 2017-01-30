import {
  GET_TODOS_REQUEST,
  GET_TODOS_FAIL,
  GET_TODOS_SUCCESS,
} from '../constants/Todo'


export function getTodos() {
    return {
        types: [GET_TODOS_REQUEST, GET_TODOS_SUCCESS, GET_TODOS_FAIL],
        payload: {
            request:{
                url:'todos/'
            }
        }
    }
}