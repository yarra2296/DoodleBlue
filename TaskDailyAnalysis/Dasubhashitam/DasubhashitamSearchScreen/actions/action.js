import { GET_AUTHORS, GET_VOICE_ARTISTS } from '../constants'
import Authors from '../fetchAuthors'
import VoiceArtists from '../fetchVoiceArtists'

export function SendAuthors() {
    console.log('test send authors function', Authors);
    return (dispatch) => {
        dispatch({type: GET_AUTHORS, Authors })
    }
}

export function SendVoiceArtists() {
    console.log('test send authors function', VoiceArtists);
    return (dispatch) => {
        dispatch({type: GET_VOICE_ARTISTS, VoiceArtists})
    }
}

