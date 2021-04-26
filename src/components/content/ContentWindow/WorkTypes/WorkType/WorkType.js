import React, {useContext, useEffect, useState} from "react";
import {API} from "../../../../../bll/api/api";
import "../../Masters/Master/Master.scss"
import {NavLink} from "react-router-dom";
import editImg from "../../../../../static/images/edit2Icon.png"
import deleteImg from "../../../../../static/images/deleteIcon.png"
import "./WorkTypes.scss"
import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis} from "react-vis";


export const WorkType = (props) => {
    const [workTypes, setWorkTypes] = useState(props.general.masters)
    const [data, setData] = useState([]);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        API.getWorkTypes(props.setWorkTypes);
    }, [])

    useEffect(() => {
        setWorkTypes(props.general.workTypes)
        if (props.general.workTypes)
            setData(props.general.workTypes.map(w => {return {x: w.name, y: w.price}}))
    }, [props.general.workTypes])

    let updateWorkTypesList = (e) => {
        const pattern = e.target.value;

        if (pattern && pattern !== "") {
            let newWorkTypesList = [];

            props.general.workTypes.forEach(m => {
                if (m.name.toLowerCase().indexOf(pattern.toLowerCase()) !== -1)
                    newWorkTypesList.push(m);
            })

            setWorkTypes(newWorkTypesList)
        } else {
            setWorkTypes(props.general.workTypes)
        }

    }

    let deleteWorkType = (e) => {
        const id = e.target.id.replace("deleteWorkType_", "");
        if (id !== "") {
            API.deleteWorkType(props.setWorkTypes, {
                workTypeId: id
            });
        }
    }

    if (!props.general.workTypes) {
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
                        <NavLink to={"/AddWorkType"}>
                            + Добавить
                        </NavLink>
                    </div>
                </div>

                <div>
                    <div>Поиск по названию</div>
                    <input type="text" onChange={updateWorkTypesList} className={"search-input"}/>
                </div>

                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <button type="button" style={{marginRight: "5px"}} onClick={() => {
                        workTypes.sort((a, b) => a.price > b.price ? 1 : -1)
                        setBool(!bool);
                    }}>Сортировать по возрастанию цены
                    </button>
                    <button type="button" onClick={() => {
                        workTypes.sort((a, b) => a.price < b.price ? 1 : -1)
                        setBool(!bool);
                    }}>Сортировать по убыванию цены
                    </button>
                </div>


                {workTypes.map(p => <div className={"master-separated"}>
                    <ul className={"master-separated-info"}>
                        <li><b>Название: {p.name}</b></li>
                        <li>Цена: {p.price}</li>
                    </ul>
                    <div className={"edit-and-delete"}>

                        <button id={"deleteWorkType_" + p.id} onClick={deleteWorkType} className={"delete-button"}>
                            <img src={deleteImg} alt={"Удалить"} />
                        </button>

                        <div className={"edit-button"}>
                            <NavLink to={"/UpdateWorkType/" + p.id} id={"editWorkType_" + p.id}>
                                <img src={editImg} alt={"Редактировать"} />
                            </NavLink>
                        </div>
                    </div>
                </div>)}

                <div align={"center"} style={{marginTop: "20px"}}>Статистика цен на услуги:</div>

                <div style={{zIndex: 1000, display: "flex", justifyContent: "center"}} className={"graphics"}>
                    <XYPlot
                        xType="ordinal"
                        width={700}
                        height={500}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis title="Услуга" style={{stroke: "#fafafa"}}/>
                        <YAxis title="Стоимость в рублях" style={{stroke: "#fafafa"}}/>
                        <LineSeries
                            data={data}
                            style={{stroke: '#fafafa', strokeWidth: 1, fontSize: "10px", transform: "translate(10px, 10px)"}}/>
                    </XYPlot>
                </div>
            </div>
        );
    }
}