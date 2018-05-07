import React from 'react'
import ReactDOM from 'react-dom'
// import {createStore,applyMiddleware,compose} from 'redux'
import {createStore,applyMiddleware} from './woniu-redux'
// import thunk from 'redux-thunk'
import thunk from './woniu-redux-thunk'
import arrThunk from './woniu-redux-array'
// import arrThunk from './woniu-redux-array'
import {counter} from './index.redux'
// import {Provider} from 'react-redux'
import {Provider} from './woniu-react-redux'
import App from './App'
import Demo from './demo'
// import './01_learn_redux'
// import Page from './context.demo'

// ReactDOM.render(<Page></Page>,document.getElementById('root'))

// const reduxDevtools = window.devToolsExtension?window.devToolsExtension():  f=>f
// const store = createStore(counter,compose(applyMiddleware(thunk),reduxDevtools))

const store = createStore(counter,applyMiddleware(thunk,arrThunk))
// const store = createStore(counter,applyMiddleware(thunk,arrThunk))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

// function add(x){
//     return function(y){
//         return x+y+3
//     }
// }

// const add = (x)=>y=>x+y+3
// const ret = add(2)(3)
// console.log('res is',ret)

// const obj = {
//     name: 'woniu',
//     type:'react'
// }
// console.log(Object.keys(obj))

// function sayHello(...args){
//     console.log(args)
// }
// sayHello('hello','React','And','Imooc')