import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer } from 'redux-form'

import user from './user'
//import page from './page'


export default combineReducers({
    user,
    routing: routerReducer,
    form: reducer
});