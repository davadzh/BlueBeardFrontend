import React from "react";
import {NavLink} from "react-router-dom";
import {NotAuthenticatedNavbar} from "./NotAuthenticatedNavbar/NotAuthenticatedNavbar";
import "./NotAuthenticatedHeader.scss"
import "../../GeneralStyles.scss"
import logo from "../../../static/images/logoblue.png";

export const NotAuthenticatedHeader = (props) => {
    return (
        <header className={"not-auth-header"}>
            <div className={"container"}>
                <NavLink to={"/"} className={"logo"}>
                    <img src={logo} alt={"Логотип"} className={"logo-img"}/>
                    <span className={"logo-blue"}>BLUE</span>
                    <span className={"logo-beard"}>BEARD</span>
                </NavLink>
                <NotAuthenticatedNavbar/>
            </div>
        </header>
    );
}