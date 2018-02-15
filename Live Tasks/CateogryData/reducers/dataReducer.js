import { GET_CART_VALUES }  from '../constants'

const initialState = {
    cartValues:[],
    isCartValues: false
}

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CART_VALUES:
            return {
                ...state,
                cartValues: action.details,
                isCartValues: true,
            }
        default:
            return state
    }
}