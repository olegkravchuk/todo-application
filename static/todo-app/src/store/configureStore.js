import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
//import {ping} from '../middlewares/ping'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
//import { combineForms } from 'react-redux-form';
//import user from '../reducers/user'


export default function configureStore(initialState) {
    const logger = createLogger();
    const client = axios.create({ //all axios can be used, shown in axios documentation
        baseURL:'http://127.0.0.1:8000/',
        responseType: 'json'
    });
    //const initialUserState = {
    //    username: '',
    //    password: ''
    //};
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunk,
                logger,
                axiosMiddleware(client)
            ),
            DevTools.instrument()
        )
    //combineForms({
    //    user: initialUserState
    //})
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        });
    }
    return store
}