import {localSt} from "../../helpers/localSt";
import {useContext} from "react";

const SET_AUTH = "SET_AUTH";
const LOGOUT = "LOGOUT"

let initialState = {
    username: "",
    token: ""
};


// Action Creators
export const setAuth = (data) => ({type: SET_AUTH, data});
export const logout = () => ({type: LOGOUT});

export let userReduser = (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {

        case SET_AUTH:
            if (!action.data.hasError) {
                stateCopy.username = action.data.data.username;
                stateCopy.token = action.data.data.token;
                localSt.setUserDataInLocal({
                    "username": action.data.data.username,
                    "token": action.data.data.token
                });
                alert("Вы успешно авторизованы");
                return stateCopy;
            } else {
                alert(action.data.error);
                return stateCopy;
            }

        case LOGOUT:
            localSt.removeDataFromLocalByKey("userData")
            return stateCopy;

        default:
            return state;
    }
}