import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import App from './App'
import {counter,addGun,removeGun,addGunAsync} from './index.redux'

const reduxDevtools = window.devToolsExtension?window.devToolsExtension():  f=>f
const store = createStore(counter,compose(applyMiddleware(thunk),reduxDevtools))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)