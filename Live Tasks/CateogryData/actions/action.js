import { GET_CART_VALUES } from '../constants'

export default function saveCartValues(details) {
    console.log("values in action:",details)
    return {
            type: GET_CART_VALUES,
            details
    }
    /*return (dispatch, getState) => {
        const {items} = getState().otherReducer;

        dispatch(return {
            type: GET_CART_VALUES,
            details
        })
    }*/
    /*return (dispatch, getState) => {
        const { issues: details } = getState();
        dispatch({
            type: GET_CART_VALUES,
            details
        });
    };*/
}