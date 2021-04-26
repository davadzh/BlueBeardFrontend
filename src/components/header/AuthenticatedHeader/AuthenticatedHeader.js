import React from "react";
import {NavLink} from "react-router-dom";
import {AuthenticatedNavbar} from "./AuthenticatedNavbar/AuthenticatedNavbar";
import AuthenticatedNavbarContainer from "./AuthenticatedNavbar/AuthenticatedNavbarContainer";
import "./AuthenticatedHeader.scss"
import "../../GeneralStyles.scss"
import logo from "../../../static/images/logoblue.png"

export const AuthenticatedHeader = (props) => {
    return (
        <header className={"auth-header"}>
            <div className={"container"}>
            <NavLink to={"/"} className={"logo"}>
                <img src={logo} alt={"Логотип"} className={"logo-img"}/>
                <span className={"logo-blue"}>BLUE</span>
                <span className={"logo-beard"}>BEARD</span>
            </NavLink>
            <AuthenticatedNavbarContainer/>
            </div>
        </header>
    );
}