import {createStore} from 'redux'

// 新建reducer，描述action如何把一个state转变成下一个state
function counter(state,action){
    switch(action.type){
        case 'INC':
            return state+1
        case 'DEC':
            return state-1
        default:
            return 10
    }
}

// 创建store来存储状态
let store = createStore(counter)

// 手动订阅
store.subscribe(()=>{
    console.log(store.getState())
})

// 派发事件，传递action
// 改变state的唯一方法是dispatch一个action
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'INC'})