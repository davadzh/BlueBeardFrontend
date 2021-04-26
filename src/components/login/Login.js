import React, {useState} from "react";
import {API} from "../../bll/api/api";
import "./Login.scss"

export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let setNewUsername = (e) => {
        setUsername(e.target.value);
    }

    let setNewPassword = (e) => {
        setPassword(e.target.value);
    }

    let login = () => {
        API.login(props.setAuth,{
            username,
            password
        })
    }

    return (
        <div className={"login-form"}>
            <h2 className={"login-title"}>Вход</h2>
            <div className={"login-input-label"}>Логин</div>
            <input placeholder={"Введите логин"}
                   value={username}
                   onChange={setNewUsername}
                   className={"login-input"}
            />
            <div className={"login-input-label"}>Пароль</div>
            <input placeholder={"Введите пароль"}
                   type={"password"}
                   value={password}
                   onChange={setNewPassword}
                   className={"login-input"}
            />
            <div className={"login-button-wrap"}>
                <button onClick={login} className={"login-button"}>Войти</button>
            </div>
        </div>
    );
}