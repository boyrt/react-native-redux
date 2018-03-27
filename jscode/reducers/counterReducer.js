'use strict'

import * as types from '../constants/counterType'
import {createReducer} from './'

const initialState = {
    count:0
}

// 不同类别的事件使用switch对应处理过程
// export default function counter(state=initialState,action) {
//     switch (action.type) {
//         case types.ADD:
//             return {
//                 ...state,
//                 count : state.count+1
//             }
//             break;
//         case types.REDUCE:
//             return {
//                 ...state,
//                 count: state.count - 1,
//             }
//             break;
//         default:
//             return state;
//     }
//
// }

const actionHandler = {
    [types.ADD] :(state,action)=>{
        return {
            ...state,
            count :state.count+1
        }
    },
    [types.REDUCE]:(state,action)=>{
        return {
            ...state,
            count :state.count-1
        }
    }
}

export default createReducer(initialState,actionHandler)