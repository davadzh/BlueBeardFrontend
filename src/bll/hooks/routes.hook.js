import React from "react";
import {Switch, Route} from "react-router-dom";
import LoginContainer from "../../components/login/LoginContainer";
import {NotAuthenticatedHeader} from "../../components/header/NotAuthenticatedHeader/NotAuthenticatedHeader";
import AuthenticatedHeaderContainer from "../../components/header/AuthenticatedHeader/AuthenticatedHeaderContainer";
import ContentContainer from "../../components/content/ContentContainer";


export const useAdminRoutes = isAuthenticated => {
    let lastPath = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);

    if (isAuthenticated) {
        return (
            <>
                <AuthenticatedHeaderContainer/>
                <ContentContainer />
            </>
        )
    } else {
        return (
            <>
                <NotAuthenticatedHeader/>
                <Switch>
                    <Route path={"/login"} exact render={() => <LoginContainer/>}/>
                    {/*<Route exact path={"/admin"} render={() => <LoginContainer/>}/>*/}
                    {/*<Route render={ () => <Page404 />} />*/}
                </Switch>
            </>
        )
    }

}