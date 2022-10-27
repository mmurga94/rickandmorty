import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharactersDetail } from "../../redux/actions";
import style from "./../CharacterDetail/CharacterDetail.module.css";
import CharacterDetailCard from "../CharacterDetailCard/CharacterDetailCard";

export default function CharacterDetail(){

    const params = useParams();
    const dispatch = useDispatch();
    const character = useSelector(state => state.characterDetail)
    const loading = useSelector(state => state.loading)

    // useEffect(() => {
    //     dispatch(getCharactersDetail(params.id))
    // }, [])

    return(
            loading ? 
            <img className={style.img} src="https://i.gifer.com/ZWdx.gif" alt="" />  :
            <CharacterDetailCard image={character.image} name={character.name} status={character.status} species={character.species} location={character.location} origin={character.origin} />
    )
}