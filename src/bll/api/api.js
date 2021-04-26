import axios from 'axios'
import {localSt} from "../helpers/localSt";

const instance = axios.create({
    baseURL: "http://localhost:8080/api/",

});

export const API = {

    getMasters(setMasters) {
        return instance.get("admin/master/getMasters", {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                setMasters(response.data);
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    getMasterById(setCurrentMaster, getMasterByIdDto) {
        return instance.post("admin/master/getMasterById", getMasterByIdDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                setCurrentMaster(response.data)
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    addMaster(newMaster) {
        return instance.post("admin/master/addMaster", newMaster, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Мастер успешно добавлен");
                document.location.href = "/Masters"

            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    updateMaster(updatedMasterDto) {
        return instance.post("admin/master/updateMaster", updatedMasterDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Данные мастера успешно изменены");
                document.location.href = "/Masters"

            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    deleteMaster(setMasters, deleteMasterDto) {
        return instance.post("admin/master/deleteMaster", deleteMasterDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Мастер успешно удален");
                this.getMasters(setMasters);
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },



    getRecords(setRecords) {
        return instance.get("admin/record/getRecords", {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                setRecords(response.data);
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    getRecordById(setCurrentRecord, getRecordByIdDto) {
        return instance.post("admin/record/getRecordById", getRecordByIdDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                setCurrentRecord(response.data)
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    addRecord(newRecord) {
        return instance.post("admin/record/addRecord", newRecord, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Новая запись успешно добавлена");
                document.location.href = "/Records"

            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    updateRecord(updatedRecordDto) {
        return instance.post("admin/record/updateRecord", updatedRecordDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Данные записи успешно изменены");
                document.location.href = "/Records"

            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    addCustomerToRecord(addCustomerToRecordDto) {
        return instance.post("admin/record/addCustomerToRecord", addCustomerToRecordDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Клиент успешно добавлен к записи");
                document.location.href = "/Records"

            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    deleteRecord(setRecords, deleteRecordDto) {
        return instance.post("admin/record/deleteRecord", deleteRecordDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Запись успешно удалена");
                this.getRecords(setRecords);
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    cancelCustomerRecord(setRecords, cancelCustomerRecordDto) {
        return instance.post("admin/record/cancelCustomerRecord", cancelCustomerRecordDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Клиент успешно удален из записи");
                this.getRecords(setRecords);
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },




    getWorkTypes(setWorkTypes) {
        return instance.get("admin/workType/getWorkTypes", {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                setWorkTypes(response.data);
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    getWorkTypeById(setCurrentWorkType, getWorkTypeByIdDto) {
        return instance.post("admin/workType/getWorkTypeById", getWorkTypeByIdDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                setCurrentWorkType(response.data)
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    addWorkType(newWorkType) {
        return instance.post("admin/workType/addWorkType", newWorkType, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Услуга успешно добавлена");
                document.location.href = "/WorkTypes"

            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    updateWorkType(updatedWorkTypeDto) {
        return instance.post("admin/workType/updateWorkType", updatedWorkTypeDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Данные услуги успешно изменены");
                document.location.href = "/WorkTypes"

            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },

    deleteWorkType(setWorkTypes, deleteWorkTypeDto) {
        return instance.post("admin/workType/deleteWorkType", deleteWorkTypeDto, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer_" + localSt.getLocalToken()
            }
        })
            .then(response => {
                alert("Услуга успешно удалена");
                this.getWorkTypes(setWorkTypes);
            })
            .catch(error => {
                alert(error.response.data.error)
            })
    },



    login(login, loginData) {
        return instance.post("user/login", loginData, {
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => {
                login(response.data);
                document.location.href = "/"
            })
            .catch(error => {
                login(error.response.data)
            })
    }
}