import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
//import {ping} from '../middlewares/ping'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
        //applyMiddleware(ping)
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        });
        return store
    }
}