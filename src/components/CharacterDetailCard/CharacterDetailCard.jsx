import React, {useEffect, useState} from "react";
import style from "../CharacterDetailCard/CharacterDetailCard.module.css";
import { handleStatus } from "../CharacterCard/CharacterCard";

export default function CharacterDetailCard({name, origin, status, species, location, image}){

    let [active, setActive] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setActive(!active)
        }, 2000)
    })

    return(
        <div className={!active? style.principal : style.principal2}>
            <img src={image} alt={name} />
            <div className={style.subContainer} >
                <h2>{name}</h2>
                <h4>{handleStatus(status)} - {species}</h4>
                <section className={style.sectionDetail} >
                    <h4>Origin: </h4>
                    <p>{origin && origin.name}</p>
                    <h4>Last known location: </h4>
                    <p>{location && location.name}</p>
                </section>
            </div>
        </div>
    )
}