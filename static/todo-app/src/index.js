//import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import './css/materialize.min.css'
import './css/app.css'
//import {} from './js/materialize.min.js'
import configureStore from './store/configureStore'


const store = configureStore();

render(
    <Provider store={store}>
        <div className='app'>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);
