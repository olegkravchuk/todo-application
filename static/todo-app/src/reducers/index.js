import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineForms, createForms } from 'react-redux-form'

import user, {initialAuthState, initialRegisterState} from './user'
import todo, {initialTodoState} from './todo'
import status, {initialStatusState} from './status'
import comment, {initialCommentState} from './comment'
import modal from './modal'


export default combineReducers({
    modal,
    user,
    todo,
    status,
    comment,
    routing: routerReducer,
    auth: combineForms({
        userLogin: initialAuthState,
        userRegister: initialRegisterState
    }, 'auth'),
    ...createForms({
        todoModel: initialTodoState,
        statusModel: initialStatusState,
        commentModel: initialCommentState
    })
});