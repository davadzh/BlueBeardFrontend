import React, {useContext, useEffect, useState} from "react";
import {API} from "../../../../../bll/api/api";
import "../../Masters/Master/Master.scss"
import {NavLink} from "react-router-dom";
import editImg from "../../../../../static/images/edit2Icon.png"
import deleteImg from "../../../../../static/images/deleteIcon.png"
import "./Record.scss"


export const Record = (props) => {
    const [records, setRecords] = useState(props.general.records)

    useEffect(() => {
        API.getRecords(props.setRecords);
    }, [])

    useEffect(() => {
        setRecords(props.general.records
            .sort((a, b) => new Date(b.recordDate) - new Date(a.recordDate)))
    }, [props.general.records])

    let updateRecordsList = (e) => {
        const pattern = e.target.value;

        if (pattern && pattern !== "") {
            let newRecordsList = [];

            props.general.records.forEach(m => {
                if (m.workType.name.toLowerCase().indexOf(pattern.toLowerCase()) !== -1)
                    newRecordsList.push(m);
            })

            setRecords(newRecordsList)
        } else {
            setRecords(props.general.records)
        }

    }

    let deleteRecord = (e) => {
        const id = e.target.id.replace("deleteRecord_", "");
        if (id !== "") {
            API.deleteRecord(props.setRecords, {
                recordId: id
            });
        }
    }

    let cancelCustomerRecord = (e) => {
        const id = e.target.id.replace("cancelCustomerRecord_", "");
        if (id !== "") {
            API.cancelCustomerRecord(props.setRecords, {
                recordId: id
            });
        }
    }

    if (!props.general.records) {
        return (
            <div>
                Loading...
            </div>
        );
    } else {
        return (
            <div className={"masters"}>
                <div className={"title-and-add"}>
                    <h1>Услуги</h1>
                    <div className={"create-new-master-button"}>
                        <NavLink to={"/AddRecord"}>
                            + Добавить
                        </NavLink>
                    </div>
                </div>


                <div>
                    <div>Поиск по названию услуги</div>
                    <input type="text" onChange={updateRecordsList} className={"search-input"}/>
                </div>

                {records.map(p => <div className={"master-separated"}>
                    <ul className={"master-separated-info"}>
                        {p.confirmed && <div className={"accepted-record"}>[ПОДТВЕРЖДЕНО]</div>}
                        {!p.confirmed && <div className={"free-record"}>[СВОБОДНО]</div>}
                        <li>Услуга: {p.workType.name}</li>
                        <li>Мастер: {p.master.fullName}</li>
                        <li>Дата и время записи: {new Date(p.recordDate).toISOString().replace(/T/, ' ').replace(/\..+/, '')}</li><br/>

                        {p.clientName && <li>Имя: {p.clientName}</li>}
                        {p.clientPhone && <li>Телефон: {p.clientPhone}</li>}
                        {p.clientEmail && <li>Email: {p.clientEmail}</li>}
                        {!p.clientName && <NavLink className={"add-customer-to-record"} to={"AddCustomerToRecord/" + p.id} id={"addCustomer_" + p.id}>Записать клиента</NavLink>}
                        {p.clientName && <button className={"deleteClientButton"} onClick={cancelCustomerRecord} id={"cancelCustomerRecord_" + p.id}>
                            Удалить клиента из записи
                        </button>}
                    </ul>
                    <div className={"edit-and-delete"}>

                        <button id={"deleteRecord_" + p.id} onClick={deleteRecord} className={"delete-button"}>
                            <img src={deleteImg} alt={"Удалить"} />
                        </button>

                        <div className={"edit-button"}>
                            <NavLink to={"/UpdateRecord/" + p.id} id={"editRecord_" + p.id}>
                                <img src={editImg} alt={"Редактировать"} />
                            </NavLink>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}