import React, {useEffect, useState} from 'react';
import {API} from "../../../../../bll/api/api";
import {NavLink} from "react-router-dom";
import "../../Masters/AddMaster/AddMaster.scss"

const AddCustomerToRecord = (props) => {
    const recordId = window.location.pathname.substr(window.location.pathname.lastIndexOf('/')+1);

    const [fullName, setFullName] = useState("");
    const [name, setName] = useState("");
    const [recordDate, setRecordDate] = useState("");

    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [clientEmail, setClientEmail] = useState("");

    useEffect(() => {
        API.getRecordById(props.setCurrentRecord, {
            recordId
        })
    }, []);

    useEffect(() => {
        props.general.currentRecord.master && setFullName(props.general.currentRecord.master.fullName);
        props.general.currentRecord.workType && setName(props.general.currentRecord.workType.name);
        props.general.currentRecord.recordDate
            && setRecordDate(new Date(props.general.currentRecord.recordDate).toISOString().replace(/T/, ' ').replace(/\..+/, ''));
    }, [props.general.currentRecord]);

    let setNewClientName = (e) => {
        setClientName(e.target.value);
    }

    let setNewClientPhone = (e) => {
        setClientPhone(e.target.value);
    }

    let setNewClientEmail = (e) => {
        setClientEmail(e.target.value);
    }

    let addCustomerToRecord = () => {
        if (clientName   !== "" &&
            clientPhone  !== "" &&
            clientEmail  !== "") {
            API.addCustomerToRecord({recordId: recordId,
                clientName, clientPhone, clientEmail})
        }
    }

    return (
        <div className={"add-master"}>
            <div className={"back-button"}>
                <NavLink to={"/Records"} >Назад</NavLink>
            </div>

            <h1>Добавить клиента к записи</h1>
            {props.general.currentRecord !== null && <div>
                <h3>К мастеру {fullName}</h3>
                <h3>на услугу {name}</h3>
                <h3>Ко времени {recordDate}</h3>
            </div>}


            <div>
                <div>Имя клиента</div>
                <input type="text" value={clientName} onChange={setNewClientName}/>
            </div>
            <div>
                <div>Телефон</div>
                <input type="text" value={clientPhone} onChange={setNewClientPhone}/>
            </div>
            <div>
                <div>Email</div>
                <input type="text" value={clientEmail} onChange={setNewClientEmail}/>
            </div>

            <button className={"accept-button"} onClick={addCustomerToRecord}>Создать</button>
        </div>
    )
}

export default AddCustomerToRecord;