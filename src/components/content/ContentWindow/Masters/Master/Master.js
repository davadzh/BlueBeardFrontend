import React, {useContext, useEffect, useState} from "react";
import {API} from "../../../../../bll/api/api";
import {setMasters} from "../../../../../bll/redux/reducers/adminGeneralReducer";
import "./Master.scss"
import {NavLink} from "react-router-dom";
import editImg from "../../../../../static/images/edit2Icon.png"
import deleteImg from "../../../../../static/images/deleteIcon.png"


export const Master = (props) => {
    const [masters, setMasters] = useState(props.general.masters)

    useEffect(() => {
        API.getMasters(props.setMasters);
    }, [])

    useEffect(() => {
        setMasters(props.general.masters)
    }, [props.general.masters])

    let updateMastersList = (e) => {
        const pattern = e.target.value;

        if (pattern && pattern !== "") {
            let newMastersList = [];

            props.general.masters.forEach(m => {
                if (m.fullName.toLowerCase().indexOf(pattern.toLowerCase()) !== -1)
                    newMastersList.push(m);
            })

            setMasters(newMastersList)
        } else {
            setMasters(props.general.masters)
        }
    }

    let deleteMaster = (e) => {
        const id = e.target.id.replace("deleteMaster_", "");
        if (id !== "") {
            API.deleteMaster(props.setMasters, {
                masterId: id
            });
        }
    }

    if (!props.general.masters) {
        return (
            <div className={"masters"}>
                <div className={"title-and-add"}>
                    <h1>Мастера</h1>
                    <div className={"create-new-master-button"}>
                        <NavLink to={"/addMaster"}>
                            + Добавить
                        </NavLink>
                    </div>
                </div>

            </div>
        );
    } else {
        return (
            <div className={"masters"}>
                <div className={"title-and-add"}>
                    <h1>Мастера</h1>
                    <div className={"create-new-master-button"}>
                        <NavLink to={"/AddMaster"}>
                            + Добавить
                        </NavLink>
                    </div>
                </div>


                <div>
                    <div>Поиск по ФИО</div>
                    <input type="text" onChange={updateMastersList} className={"search-input"}/>
                </div>

                {masters.map(p => <div className={"master-separated"}>
                    <ul className={"master-separated-info"}>
                        <li><b>ФИО: {p.fullName}</b></li>
                        <li>Возраст: {p.age}</li>
                        <li>Должность: {p.position}</li>
                    </ul>
                    <div className={"edit-and-delete"}>

                        <button id={"deleteMaster_" + p.id} onClick={deleteMaster} className={"delete-button"}>
                            <img src={deleteImg} alt={"Удалить"} />
                        </button>

                        <div className={"edit-button"}>
                            <NavLink to={"/UpdateMaster/" + p.id} id={"editMaster_" + p.id}>
                                <img src={editImg} alt={"Редактировать"} />
                            </NavLink>
                        </div>
                    </div>
                </div>)}
            </div>
        );
    }
}