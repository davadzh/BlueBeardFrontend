import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import {useAdminRoutes} from "../bll/hooks/routes.hook";
import {useAuth} from "../bll/hooks/auth.hook";
import {AuthContext} from "../bll/context/authContext";
import "./Admin.scss";

const Admin = (props) => {
    const {login, logout, token, username} = useAuth()
    const isAuthenticated = !!token
    const routes = useAdminRoutes(isAuthenticated)

    return (
        <AuthContext.Provider value={{
            login, logout, token, username, isAuthenticated
        }}>
            <BrowserRouter>
                <div className={"admin-body"}>
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default Admin;
