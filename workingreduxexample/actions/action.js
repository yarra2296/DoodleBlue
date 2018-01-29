import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'
import fetchpeople from '../api';

export function getData() {
    return {
        type: FETCHING_DATA
    }
}

export function getDataSuccess(data) {
    console.log(data)
    return {
        type: FETCHING_DATA_SUCCESS,
        data,
    }
}

export function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export function fetchData() {
    return (dispatch) => {
        dispatch(getData())
        console.log("I'm Going in to fetching Data")
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ef561f7020714b2abd8e39b9407c402d')
            .then((response) => response.json())
            .then((response)=> dispatch(getDataSuccess(response)))
            .catch((err) => console.log('err:', err))
    }
}