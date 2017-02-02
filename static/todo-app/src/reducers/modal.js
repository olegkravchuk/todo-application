import {SHOW_MODAL, HIDE_MODAL} from '../constants/Modal'


const initialState = {
    show: false,
    name: ''
};


export default function modal(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, ...action.payload};
        case HIDE_MODAL:
            return {...state, ...action.payload};
        default:
            return state
    }
}

