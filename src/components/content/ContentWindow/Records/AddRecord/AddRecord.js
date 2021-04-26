import React, {useEffect, useState} from 'react';
import {API} from "../../../../../bll/api/api";
import {NavLink} from "react-router-dom";
import "../../Masters/AddMaster/AddMaster.scss"

const AddRecord = (props) => {
    const [master, setMaster] = useState("");
    const [workType, setWorkType] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        API.getMasters(props.setMasters)
        API.getWorkTypes(props.setWorkTypes)
    }, [])

    let setNewMaster = (e) => {
        setMaster(e.target.value);
    }

    let setNewWorkType = (e) => {
        setWorkType(e.target.value);
    }

    let setNewDate = (e) => {
        setDate(e.target.value);
    }

    let addRecord = () => {
        if (master   !== "" &&
            workType !== "" &&
            date     !== "") {
            API.addRecord({masterId: master, workTypeId: workType, recordDate: date})
        }
    }

    return (
        <div className={"add-master"}>
            <div className={"back-button"}>
                <NavLink to={"/Records"} >Назад</NavLink>
            </div>

            <h1>Добавить новую запись</h1>
            <div>
                <div>Мастер</div>
                <select type="text" value={master} onChange={setNewMaster}>
                    <option disabled value="">Выбрать мастера</option>
                    {props.general.masters.map(el =>
                        <option value={el.id}>{el.fullName}</option>
                    )}
                </select>
            </div>
            <div>
                <div>Услуга</div>
                <select type="text" value={workType} onChange={setNewWorkType}>
                    <option disabled value="">Выбрать услугу</option>
                    {props.general.workTypes.map(el =>
                        <option value={el.id}>{el.name}</option>
                    )}
                </select>
            </div>
            <div>
                <div>Дата</div>
                <input type="datetime-local" value={date} onChange={setNewDate}/>
            </div>

            <button className={"accept-button"} onClick={addRecord}>Создать</button>
        </div>
    )
}

export default AddRecord;