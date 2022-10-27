import { GET_CHARACTERS, GET_CHARACTER_DETAIL, LOADING } from '../actions/index';

const initialState = {
    characters: [],
    characterDetail: {},
    loading: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS:
            return{
                ...state,
                characters: action.payload,
            }
        case GET_CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail: action.payload.character,
                loading: action.payload.loading
            }
        case LOADING:
            return{
                ...state,
                loading: action.payload
            }
        default:
            return {...state}
    }

}

export default rootReducer