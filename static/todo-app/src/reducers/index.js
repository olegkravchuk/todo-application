import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineForms } from 'react-redux-form'

import user, {initialAuthState} from './user'
import todo from './todo'
import status from './status'


export default combineReducers({
    user,
    todo,
    status,
    routing: routerReducer,
    auth: combineForms({
        user: initialAuthState
    }, 'auth')
});