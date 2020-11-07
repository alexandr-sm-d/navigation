import {SET_POINT, SET_TARGET_WAY} from "./actions";

let initialState = {
    coordinateFirstRadioreciever: {x: 0, y: 0},
    coordinateSecondRadioreciever: {x: 0, y: 0},
    coordinateThirdRadioreceiver: {x: 0, y: 0},
    distanceList: []
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POINT: {
            switch (action.data.id) {
                case 1: {
                    return {
                        ...state,
                        coordinateFirstRadioreciever: {
                            x : +action.data.x,
                            y : +action.data.y,
                        }
                    }
                }
                case 2: {
                    return {
                        ...state,
                        coordinateSecondRadioreciever: {
                            x : +action.data.x,
                            y : +action.data.y,
                        }
                    }
                }
                case 3: {
                    return {
                        ...state,
                        coordinateThirdRadioreceiver: {
                            x : +action.data.x,
                            y : +action.data.y,
                        }
                    }
                }
            }
        }
        case SET_TARGET_WAY: {
            debugger
            console.log(action.data)
            let validData = action.data.map(arr => {
                return {
                    x: arr[0],
                    y: arr[1]
                }
            })
            console.log('valid', validData)
            debugger
            return {
                ...state,
                distanceList: validData
            }
        }
        default:
            return state;
    }
}