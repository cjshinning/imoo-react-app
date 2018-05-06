

const ADD_GUN = 'INC'
const REMOVE_GUN = 'DEC'

// reducer
export function counter(state,action){
    switch(action.type){
        case ADD_GUN:
            return state+1
        case REMOVE_GUN:
            return state-1
        default:
            return 10
    }
}

// action creator
export function addGun(){
    return {type:ADD_GUN}
}

export function removeGun(){
    return {type:REMOVE_GUN}
}

export function addGunAsync(){
    return dispatch=>{
        setTimeout(function(){
            dispatch(addGun())
        },1000)
    }
}