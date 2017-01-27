import {
  GET_STATUSES_REQUEST,
  GET_STATUSES_FAIL,
  GET_STATUSES_SUCCESS,
} from '../constants/Status'


export function getStatuses() {
    return {
        types: [GET_STATUSES_REQUEST, GET_STATUSES_SUCCESS, GET_STATUSES_FAIL],
        payload: {
            request:{
                url:'statuses'
            }
        }
    }
}