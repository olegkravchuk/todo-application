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


export function getStatuses() {
    return {
        types: [GET_STATUSES_REQUEST, GET_STATUSES_SUCCESS, GET_STATUSES_FAIL],
        payload: {
            request:{
                url:'statuses/'
            }
        }
    }
}

export function cteateStatus(status) {
    return {
        types: [POST_STATUS_REQUEST, POST_STATUS_SUCCESS, POST_STATUS_FAIL],
        payload: {
            request:{
                url: 'statuses/',
                method: 'post',
                data: status
            }
        }
    }
}

export function changeStatusCreatedStatus(created=false) {
    return {
        type: CHANGE_STATUS_CREATED,
        payload: created
    }
}

export function deleteStatus(status) {
    return {
        types: [DELETE_STATUS_REQUEST, DELETE_STATUS_SUCCESS, DELETE_STATUS_FAIL],
        payload: {
            request:{
                url: 'statuses/' + status.id + '/',
                method: 'delete'
            }
        }
    }
}