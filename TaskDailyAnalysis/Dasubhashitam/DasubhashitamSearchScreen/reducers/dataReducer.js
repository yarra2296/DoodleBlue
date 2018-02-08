import { GET_VOICE_ARTISTS, GET_AUTHORS } from '../constants'
const initialState = {
    data1: [ ],
    data2: [ ],
    error: false
}

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case GET_AUTHORS:
            return {
                ...state,
                data1: action.Authors
            }
        case GET_VOICE_ARTISTS:
            return{
                ...state,
                data2: action.VoiceArtists
            }
        default:
            return state
    }
}