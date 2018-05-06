import {createStore} from 'redux'
// import {createStore} from './woniu-redux'

function counter(state = 0, action){
    console.log(state,action)
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        default:
            return 10
    }
}

let store = createStore(counter)

store.subscribe(()=>
    console.log(store.getState())
)

store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'INCREMENT'})