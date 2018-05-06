import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {counter} from './index.redux'
import {Provider} from 'react-redux'
import App from './App'
import Demo from './demo'

ReactDOM.render(<Demo></Demo>,document.getElementById('root'))

// const reduxDevtools = window.devToolsExtension?window.devToolsExtension():  f=>f
// const store = createStore(counter,compose(applyMiddleware(thunk),reduxDevtools))

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// )