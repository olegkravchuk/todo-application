import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { formReducer,
    modelReducer
} from 'react-redux-form'

//import user from './user'
import {initialState} from './user'
import todo from './todo'
import status from './status'


export default combineReducers({
    //user,
    todo,
    status,
    routing: routerReducer,
    user: modelReducer('user', initialState),
    userForm: formReducer('user')
});