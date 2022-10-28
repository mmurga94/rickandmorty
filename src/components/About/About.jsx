import React from "react";
import style from "../About/About.module.css"
import image from "../About/img.jpeg"

export default function About(){
    return(
        <>
        <div className={style.principal}>
            <img src={image} alt='' />
            <div className={style.subContainer} >
                <h2>Manuel Murga</h2>
                <h4>Full Stack Developer </h4>
                <section className={style.sectionDetail} >
                    <h4>Proyecto: </h4>
                    <p>Rick and Morty App</p>
                    <h4>Tecnologías usadas: </h4>
                    <p>JavaScript - ReactJs - Redux</p>
                </section>
            </div>
        </div>
        </>
    )
}