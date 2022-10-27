import React from "react";
import { NavLink } from "react-router-dom";
import style from '../Nav/Nav.module.css';
import img from '../Nav/menu.png';
import { useState } from "react";

export default function Nav(){

    let [active, setActive] = useState(false)

    function handleMenu(){
        setActive(!active)
    }

    return(
        <>  
            <div className={style.nav}>
                <NavLink to='/' className={style.link} > <img className={style.img} src="https://www.pngitem.com/pimgs/m/43-438051_rick-and-morty-title-hd-png-download.png" alt="marvel" /> </NavLink>
                <div className={style.optionsContainer}>
                <NavLink to='/' className={style.linkHome} > <p>HOME</p> </NavLink>
                <NavLink to='/favorites' className={style.linkHome} > <p>FAVORITES</p> </NavLink>
                </div>
                <img onClick={handleMenu} className={style.burgerMenu} src={img} alt="" />
            </div>
            <div className={active ? style.optionsContainerResponsive : style.none}>
                <NavLink to='/' className={style.linkHome} > <p>HOME</p> </NavLink>
                <NavLink to='/' className={style.linkHome} > <p>ABOUT</p> </NavLink>
            </div>
        </>
    )
}