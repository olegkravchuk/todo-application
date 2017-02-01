import {SHOW_MODAL, HIDE_MODAL} from '../constants/Modal'

export function show() {
    return {
        type: SHOW_MODAL,
        payload: true
        }
    }

export function hide() {
    return {
        type: HIDE_MODAL,
        payload: false
        }
    }