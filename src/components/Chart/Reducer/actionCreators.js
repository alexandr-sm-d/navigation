import {SET_POINT, SET_TARGET_WAY} from "./actions";

export const setPoint = data => {
    return {type: SET_POINT, data}
}

export const setTargetWay = data => {
    debugger
    return {type: SET_TARGET_WAY, data}
}