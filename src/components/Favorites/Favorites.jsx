import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "../CharacterCard/CharacterCard";
import style from '../Favorites/Favorites.module.css'

export default function Favorites(){

    const favorites = useSelector(state => state.favorites)
    
    return(
        <div className={style.principal}>
        < div className={style.container} >
            {favorites && favorites.map( c => <CharacterCard key={c.id} id={c.id} name={c.name} status={c.status} image={c.image} />)}
        </div>
        </div>
    )
}