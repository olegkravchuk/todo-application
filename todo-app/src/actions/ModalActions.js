import {SHOW_MODAL, HIDE_MODAL} from '../constants/Modal'

export function show(name) {
    return {
        type: SHOW_MODAL,
        payload: {show: true, name: name}
        }
    }

export function hide(name) {
    return {
        type: HIDE_MODAL,
        payload: {show: false, name: name}
        }
    }