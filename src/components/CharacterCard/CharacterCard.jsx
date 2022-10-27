import React from "react";
import style from "./../CharacterCard/CharacterCard.module.css";
import { NavLink } from "react-router-dom";

export default function CharacterCard({name, status, image, id}){

    return(
        <>
            <NavLink to={`/character/${id}`} className={style.card} >
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                    <p> Status: {handleStatus(status)} </p>
            </NavLink>
        </>
    )
}

export function handleStatus(status){
    switch(status){
        case 'Alive':
            return <span className={style.statusAlive} >❤ {status} </span>
        case 'Dead':
            return <span className={style.statusDead} >☠️ {status} </span>
        default:
            return <span> {status} </span>
    }
}