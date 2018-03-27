
import * as types from '../constants/counterType'

// export function reduce() {
//     return {type:types.REDUCE}
// }
//
// export function add() {
//     return {type:types.ADD}
// }

const reduce = ()=> {
    return {type:types.REDUCE}
}

const add = ()=> {
    return {type:types.ADD}
}

export  default{
    add,
    reduce
}