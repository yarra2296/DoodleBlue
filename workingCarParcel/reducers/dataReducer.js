import {SAVE_CAR_HATCHBACK_1, SAVE_CAR_HATCHBACK_2, SAVE_CAR_SUV_1, SAVE_CAR_SUV_2 } from '../constants'

const initialState = {
    hatchbackOneCarDetails:{},
    hatchbackTwoCarDetails:{},
    SUVOneCarDetails:{},
    SUVTwoCarDetails:{},
    isHatchbackOneCarDetails: false,
    isHatchbackTwoCarDetails: false,
    isSUVOneCarDetails: false,
    isSUVTwoCarDetails: false
}

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case SAVE_CAR_HATCHBACK_1:
            return {
                ...state,
                hatchbackOneCarDetails: action.details,
                isHatchbackOneCarDetails: true,
            }
        case SAVE_CAR_HATCHBACK_2:
            return {
                ...state,
                hatchbackTwoCarDetails: action.details,
                isHatchbackTwoCarDetails: true,
            }
        case SAVE_CAR_SUV_1:
            return {
                ...state,
                SUVOneCarDetails: action.details,
                isSUVOneCarDetails: true,
            }
        case SAVE_CAR_SUV_2:
            return {
                ...state,
                SUVTwoCarDetails: action.details,
                isSUVTwoCarDetails: true,
            }
        default:
            return state
    }
}