import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
//import {ping} from '../middlewares/ping'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools';


export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, logger),
            DevTools.instrument()
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