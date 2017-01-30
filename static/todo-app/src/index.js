//import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App'
import DevTools from './containers/DevTools'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Registration from './pages/Registration'
import './css/materialize.min.css'
import './css/app.css'
//import {} from './js/materialize.min.js'
import configureStore from './store/configureStore'


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div className='app'>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} onEnter={requireAuth} />
                    <Route path="about" component={About} onEnter={requireAuth}/>
                    <Route path="login" component={Login}/>
                    <Route path="registration" component={Registration}/>
                </Route>
            </Router>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);


function requireAuth(nextState, replace) {
    if (!sessionStorage.jwt) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
