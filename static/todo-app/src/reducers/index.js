import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { formReducer } from 'react-redux-form'

import user from './user'
import todo from './todo'
import status from './status'

const initialUserState = {
  username: '',
  password: ''
};

export default combineReducers({
    user,
    todo,
    status,
    routing: routerReducer,
    //user: modelReducer('user', initialUserState),
    loginForm: formReducer('user', initialUserState)
});