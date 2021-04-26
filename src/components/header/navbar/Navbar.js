import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <NavLink to={"/Records"}>Записи</NavLink>
            <NavLink to={"/Masters"}>Мастера</NavLink>
            <NavLink to={"/WorkTypes"}>Услуги</NavLink>
            <NavLink to={"/login"}>Вход</NavLink>
        </nav>
    );
}