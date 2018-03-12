'use strict'

import * as types from '../constants/counterType'

const initialState = {
    count:0
}

// 不同类别的事件使用switch对应处理过程
export default function counter(state=initialState,action) {
    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                count : state.count+1
            }
            break;
        case types.REDUCE:
            return {
                ...state,
                count: state.count - 1,
            }
            break;
        default:
            return state;
    }

}