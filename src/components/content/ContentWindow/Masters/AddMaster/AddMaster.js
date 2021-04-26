import React, {useContext, useEffect, useState} from "react";
import {API} from "../../../../../bll/api/api";
import "../Master/Master.scss"
import {NavLink} from "react-router-dom";
import "./AddMaster.scss"

export const AddMaster = (props) => {
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("");

    function validateFullName (value){
        var regExp = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/
        return regExp.test(value)
    }

    let setNewFullName = (e) => {
        setFullName(e.target.value);
    }

    let setNewPosition = (e) => {
        setPosition(e.target.value);
    }

    let setNewAge = (e) => {
        setAge(e.target.value);
    }

    let addMaster = () => {
        if (fullName !== "" &&
            age !== "" && age > 0 && age < 110 &&
            position !== "") {
            API.addMaster({fullName, position, age})
        }
    }

    return (
        <div className={"add-master"}>
            <div className={"back-button"}>
                <NavLink to={"/Masters"}>Назад</NavLink>
            </div>

            <h1>Добавить нового мастера</h1>
            <div>
                <div>ФИО</div>
                <input type="text" value={fullName} onChange={setNewFullName}/>
                {!validateFullName(fullName) && <div style={{color: "red", fontSize: "10px"}}>Некорректное ФИО</div>}
            </div>
            <div>
                <div>Возраст</div>
                <input type="number" value={age} onChange={setNewAge}/>
                {!(age > 0 && age < 110) && <div style={{color: "red", fontSize: "10px"}}>Некорректный возраст</div>}
            </div>
            <div>
                <div>Должность</div>
                <input type="text" value={position} onChange={setNewPosition}/>
            </div>

            <button className={"accept-button"} onClick={addMaster}>Создать</button>
        </div>
    );
}