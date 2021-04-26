import React from "react";
import {NavLink} from "react-router-dom";
import {AdminNavigation} from "./AdminNavigation/AdminNavigation";
import ContentWindowContainer from "./ContentWindow/ContentWindowContainer";
import "../GeneralStyles.scss"
import "./Content.scss"

export const Content = (props) => {

    return (
        <div className={"content"}>
            <div className={"container"}>
                <AdminNavigation/>
                <ContentWindowContainer/>
            </div>
        </div>
    );
}