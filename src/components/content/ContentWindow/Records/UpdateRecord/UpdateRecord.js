import React, {useEffect, useState} from "react";
import {API} from "../../../../../bll/api/api";
import {NavLink} from "react-router-dom";
import "../../Masters/AddMaster/AddMaster.scss"

const UpdateRecord = (props) => {
    const recordId = window.location.pathname.substr(window.location.pathname.lastIndexOf('/')+1);

    // const [currentRecord, setCurrentRecord] = useState({});
    const [master, setMaster] = useState("");
    const [workType, setWorkType] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        API.getRecordById(props.setCurrentRecord, {
            recordId
        })
        API.getMasters(props.setMasters)
        API.getWorkTypes(props.setWorkTypes)
    }, [])

    useEffect(() => {
        props.general.currentRecord.master && setMaster(props.general.currentRecord.master);
        props.general.currentRecord.workType && setWorkType(props.general.currentRecord.workType);
        props.general.currentRecord.recordDate
        && setDate(props.general.currentRecord.recordDate);
    }, [props.general.currentRecord]);

    let setNewMaster = (e) => {
        setMaster(e.target.value);
    }

    let setNewWorkType = (e) => {
        setWorkType(e.target.value);
    }

    let setNewDate = (e) => {
        setDate(e.target.value);
    }

    let updateRecord = () => {
        if (master   !== "" &&
            workType !== "" &&
            date     !== "") {
            API.updateRecord({recordId, masterId: master, workTypeId: workType, recordDate: date})
        }
    }

    return (
        <div className={"add-master"}>
            <div className={"back-button"}>
                <NavLink to={"/Records"} >Назад</NavLink>
            </div>

            <h1>Редактирование записи</h1>
            <div>
                <div>Мастер</div>
                <select type="text" value={master} onChange={setNewMaster}>
                    <option disabled defaultValue={master.fullName}>Выбрать мастера</option>
                    {props.general.masters.map(el =>
                        <option value={el.id}>{el.fullName}</option>
                    )}
                </select>
            </div>
            <div>
                <div>Услуга</div>
                <select type="text" value={workType} onChange={setNewWorkType}>
                    <option disabled defaultValue={workType.name}>Выбрать услугу</option>
                    {props.general.workTypes.map(el =>
                        <option value={el.id}>{el.name}</option>
                    )}
                </select>
            </div>
            <div>
                <div>Дата</div>
                <input type="datetime-local" defaultValue={date} onChange={setNewDate}/>
            </div>

            <button className={"accept-button"} onClick={updateRecord}>Обновить</button>
        </div>
    )
}

export default UpdateRecord;