'use strict'

import * as types from '../constants/loginType'
import {createReducer} from './'

const initialState = {
    status:'点击登陆',
    isSuccess:false,
    user:null
}

// 不同类别的事件使用switch对应处理过程
// export default function loginIn(state=initialState,action) {
//     switch (action.type){
//         case types.LOGIN_IN_DOING:
//             return {
//                 ...state,
//                 status:'正在登陆...',
//                 isSuccess:false,
//                 user:null
//             }
//             break;
//         case types.LOGIN_IN_DONE:
//             return {
//                 ...state,
//                 status:'登陆成功',
//                 isSuccess:true,
//                 user:action.user
//             }
//             break;
//         case types.LOGIN_IN_ERROR:
//             return {
//                 ...state,
//                 status:'登录出错...',
//                 isSuccess:true,
//                 user:null
//             }
//             break;
//         default:
//             return state;
//     }
//
// }

const actionHandler = {
    [types.LOGIN_IN_DOING] : (state,action)=>{
        return {
            ...state,
            status:'正在登陆...',
            isSuccess:false,
            user:null
        }
    },
    [types.LOGIN_IN_DONE]:(state,action)=>{
        return {
            ...state,
            status:'登陆成功',
            isSuccess:true,
            user:action.user
        }
    },
    [types.LOGIN_IN_ERROR]:(state,action)=>{
        return {
            ...state,
            status:'登录出错...',
            isSuccess:true,
            user:null
        }
    },
}

export default createReducer(initialState,actionHandler)