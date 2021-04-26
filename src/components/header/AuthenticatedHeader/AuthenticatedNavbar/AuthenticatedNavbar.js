import React from "react";
import {NavLink} from "react-router-dom";
import "./AuthenticatedNavbar.scss"

export const AuthenticatedNavbar = (props) => {

    let logout = () => {
        props.logout();
        document.location.href = "/login"
    }

    return (
        <nav className={"auth-header-navbar"}>
            <button onClick={logout} className={"logout-link"}>Выход</button>
        </nav>
    );
}