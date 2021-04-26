import React, {useContext, useEffect, useState} from "react";
import {API} from "../../../../../bll/api/api";
import {NavLink} from "react-router-dom";
import "../../Masters/AddMaster/AddMaster.scss"

export const UpdateWorkType = (props) => {
    const workTypeId = window.location.pathname.substr(window.location.pathname.lastIndexOf('/')+1);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        API.getWorkTypeById(props.setCurrentWorkType, {
            workTypeId
        })
    }, []);

    useEffect(() => {
        setName(props.general.currentWorkType.name);
        setPrice(props.general.currentWorkType.price);
    }, [props.general.currentWorkType]);

    let setNewName = (e) => {
        setName(e.target.value);
    }

    let setNewPrice = (e) => {
        setPrice(e.target.value);
    }

    let updateWorkType = () => {
        if (name  !== "" &&
            price !== "") {
            API.updateWorkType({workTypeId, name, price})
        }
    }

    return (
        <div className={"add-master"}>
            <div className={"back-button"}>
                <NavLink to={"/WorkTypes"} >Назад</NavLink>
            </div>

            <h1>Изменить данные услуги </h1>

            <h3>{props.general.currentWorkType !== null
            && props.general.currentWorkType.name}</h3>

            <div>
                <div>Название услуги</div>
                <input type="text" value={name} onChange={setNewName}/>
            </div>
            <div>
                <div>Цена</div>
                <input type="text" value={price} onChange={setNewPrice}/>
            </div>

            <button className={"accept-button"} onClick={updateWorkType}>Обновить</button>
        </div>
    );
}