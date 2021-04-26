import React from "react";
import {Navbar} from "./navbar/Navbar";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <NavLink to={"/"}>BlueBeard</NavLink>
            <Navbar/>
        </header>
    );
}