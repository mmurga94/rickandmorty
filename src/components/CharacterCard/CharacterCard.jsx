import React from "react";
import style from "./../CharacterCard/CharacterCard.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../redux/actions";
import swal from "sweetalert";

export default function CharacterCard({name, status, image, id}){

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites)

    function handleFavorite(id){
        const CHARACTER_ALREADY_IN_FAVORITES = favorites.some(c => c.id === id)
        if(CHARACTER_ALREADY_IN_FAVORITES) {
            swal({
                title: 'character is already in favorites',
                icon: 'error'
            })
        }else{
            dispatch(addFavorite(id)) 
            swal({
                title: "Character added to favorites",
                icon: 'success'
            })
        }

    }

    return(
        <>
            <div className={style.card} >
                    <NavLink to={`/character/${id}`} className={style.link}>
                        <img src={image} alt={name} /> 
                    </NavLink>
                    <h2>{name}</h2>
                    <div className={style.infoContainer} >
                        <p> Status: {handleStatus(status)} </p>
                        <span className={style.favorite} onClick={() => handleFavorite(id)} >♥</span>
                    </div>
            </div>
        </>
    )
}

export function handleStatus(status){
    switch(status){
        case 'Alive':
            return <span className={style.statusAlive} >◉ {status} </span>
        case 'Dead':
            return <span className={style.statusDead} >☠️ {status} </span>
        default:
            return <span> {status} </span>
    }
}