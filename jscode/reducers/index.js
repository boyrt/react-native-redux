'use strict'

import {combineReducers} from 'redux'
import loginIn from './loginReducer'
import counter from './counterReducer'



export function createReducer(initialState, handlers) {
    return function reducer(state = initialState,action) {
        if (handlers.hasOwnProperty(action.type)){
            console.log('****************************')
            return handlers[action.type](state,action)
        }else{
            console.log('==============================')
            return state
        }
    }
}

const rootReducer = combineReducers({
    loginIn:loginIn,
    counter:counter
})

export default rootReducer;//导出，作为统一入口