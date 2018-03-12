
import * as types from '../constants/counterType'

export function reduce() {
    return {type:types.REDUCE}
}

export function add() {
    return {type:types.ADD}
}