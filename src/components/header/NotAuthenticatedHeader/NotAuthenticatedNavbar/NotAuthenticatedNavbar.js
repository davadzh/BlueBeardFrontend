import React from "react";
import {NavLink} from "react-router-dom";
import "./NotAuthenticatedNavbar.scss"

export const NotAuthenticatedNavbar = (props) => {
    return (
        <nav className={"not-auth-header-navbar"}>
            <NavLink to={"/login"} className={"login-link"}>Вход</NavLink>
        </nav>
    );
}