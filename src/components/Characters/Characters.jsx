import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, getCharactersByName } from './../../redux/actions/index';
import CharacterCard from "../CharacterCard/CharacterCard";
import style from "./../Characters/Characters.module.css"

export default function Characters(){

    let [filtro, setFiltro] = useState('')

    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(getCharacters());
    }, [])

    function handleCondition(e){
        setFiltro(e.target.value)
    }

    function handleFiltrado(e){
        e.preventDefault();
        dispatch(getCharactersByName(filtro))
        setFiltro('')
    }

    function limpiarFiltro(){
        dispatch(getCharacters())
    }

    function next(){
        dispatch(getCharacters(characters.info.next))
    }

    function prev(){
        dispatch(getCharacters(characters.info.prev))
    }

        return(
            <div className={style.principal} >
            <form  className={style.form} action="" onSubmit={(e) => handleFiltrado(e)} >
                <input className={style.input} type="text" value={filtro} onChange={(e) => handleCondition(e)} placeholder='Filtrar por nombre' />
                <button className={style.button} type="submit" >Filtrar</button>
            </form>
            <button className={style.button} onClick={limpiarFiltro} >Limpiar Filtro</button>
            <div>
            { characters.info && characters.info.prev ?  <button onClick={prev} className={style.button} > ◀ </button> : <button disabled className={style.buttonDisabled}> ◀ </button> }
            { characters.info && characters.info.next ?  <button onClick={next} className={style.button}> ▶ </button>  : <button disabled className={style.buttonDisabled}> ▶ </button>  }
            </div>
            < div className={style.container} >
                {characters.results && characters.results.map( c => <CharacterCard key={c.id} id={c.id} name={c.name} status={c.status} image={c.image} />)}
            </div>
            </div>
        )

}