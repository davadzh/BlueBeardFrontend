import React, {useContext, useEffect, useState} from "react";
import {API} from "../../../../../bll/api/api";
import "../../Masters/AddMaster/AddMaster.scss"
import {NavLink} from "react-router-dom";
import "../../Masters/AddMaster/AddMaster.scss"

export const AddWorkType = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    let setNewName = (e) => {
        setName(e.target.value);
    }

    let setNewPrice = (e) => {
        setPrice(e.target.value);
    }

    let addWorkType = () => {
        if (name  !== "" &&
            price !== "") {
            API.addWorkType({name, price})
        }
    }

    return (
        <div className={"add-master"}>
            <div className={"back-button"}>
                <NavLink to={"/WorkTypes"} >Назад</NavLink>
            </div>

            <h1>Добавить новую услугу</h1>
            <div>
                <div>Название услуги</div>
                <input type="text" value={name} onChange={setNewName}/>
            </div>
            <div>
                <div>Цена</div>
                <input type="text" value={price} onChange={setNewPrice}/>
            </div>

            <button className={"accept-button"} onClick={addWorkType}>Создать</button>
        </div>
    );
}