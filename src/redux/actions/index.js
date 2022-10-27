export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const LOADING = 'LOADING';
export const ADD_FAVORITE = 'ADD_FAVORITE'

export const getCharacters = (url = 'https://rickandmortyapi.com/api/character') => {
    return async function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(characters => dispatch({ type: GET_CHARACTERS, payload: characters}))
    }
}

export const getCharactersDetail = (id) => {
    return function(dispatch){
        dispatch(loading())
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(character => dispatch({ type: GET_CHARACTER_DETAIL, payload: {character: character, loading: false}}))
    }
}

export const getCharactersByName = (name) => {
    return function(dispatch){
        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then(response => response.json())
        .then(characters => dispatch({ type: GET_CHARACTERS, payload: characters}))
    }
}

export const addFavorite = (id) => {
    return function(dispatch){
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(character => dispatch({ type: ADD_FAVORITE, payload: character}))
    }
}

export const loading = () => {
    return({
        type: LOADING,
        payload: true
    })
}
