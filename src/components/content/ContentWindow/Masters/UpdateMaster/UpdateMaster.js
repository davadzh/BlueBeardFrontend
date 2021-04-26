import React, {useContext, useEffect, useState} from "react";
import {API} from "../../../../../bll/api/api";
import {setMasters} from "../../../../../bll/redux/reducers/adminGeneralReducer";
import {NavLink} from "react-router-dom";
import "../AddMaster/AddMaster.scss"

export const UpdateMaster = (props) => {
    const masterId = window.location.pathname.substr(window.location.pathname.lastIndexOf('/')+1);

    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [position, setPosition] = useState("");

    useEffect(() => {
        API.getMasterById(props.setCurrentMaster, {
            masterId
        })
    }, []);

    useEffect(() => {
        setFullName(props.general.currentMaster.fullName);
        setAge(props.general.currentMaster.age);
        setPosition(props.general.currentMaster.position);
    }, [props.general.currentMaster]);

    let setNewFullName = (e) => {
        setFullName(e.target.value);
    }

    let setNewPosition = (e) => {
        setPosition(e.target.value);
    }

    let setNewAge = (e) => {
        setAge(e.target.value);
    }

    let updateMaster = () => {
        if (fullName !== "" &&
            age      !== "" &&
            position !== "") {
            API.updateMaster({masterId, fullName, position, age})
        }
    }

    return (
        <div className={"add-master"}>
            <div className={"back-button"}>
                <NavLink to={"/Masters"} >Назад</NavLink>
            </div>

            <h1>Изменить данные мастера </h1>

            <h3>{props.general.currentMaster !== null
            && props.general.currentMaster.fullName}</h3>

            <div>
                <div>ФИО</div>
                <input type="text" value={fullName} onChange={setNewFullName}/>
            </div>
            <div>
                <div>Возраст</div>
                <input type="text" value={age} onChange={setNewAge}/>
            </div>
            <div>
                <div>Должность</div>
                <input type="text" value={position} onChange={setNewPosition}/>
            </div>

            <button className={"accept-button"} onClick={updateMaster}>Обновить</button>
        </div>
    );
}