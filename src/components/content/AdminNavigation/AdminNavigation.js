import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import "./AdminNavigation.scss"

export const AdminNavigation = (props) => {

    return (
        <div className={"admin-navigation"}>
            <ul>
                <li><NavLink to={"/Records"}>Записи</NavLink></li>
                <li><NavLink to={"/Masters"}>Мастера</NavLink></li>
                <li><NavLink to={"/WorkTypes"}>Услуги</NavLink></li>
                <li><NavLink to={"/About"}>Об авторе</NavLink></li>
            </ul>
        </div>
    );
}