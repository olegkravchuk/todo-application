import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'
//import {ping} from '../middlewares/ping'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
//import DevTools from '../containers/DevTools';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {getToken} from '../reducers/user'


export default function configureStore(initialState) {
    const logger = createLogger();
    const client = axios.create({ //all axios can be used, shown in axios documentation
        baseURL:'http://127.0.0.1:8000/',
        responseType: 'json'
    }
    );
    const option = {
        interceptors: {
            request: [
                (func, config) => {
                    if(getToken()) {
                        config.headers['Authorization'] = 'JWT ' + getToken();
                    }
                    return config
                }
            ],
            response: [
                (getState, response) => {
                    return response
                }
            ]
        }
    };

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunk,
                logger,
                axiosMiddleware(client, option),
                routerMiddleware(browserHistory)
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            //DevTools.instrument()
        )
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        });
    }
    return store
}