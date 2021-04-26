const addDataToLocalArray = (key, data) => {
    const currentData = localStorage.getItem(key);
    let dataArray = [];

    if (currentData !== null)
        dataArray = JSON.parse(currentData);

    dataArray.push(data);
    localStorage.setItem(key, JSON.stringify(dataArray));
}

const setDataToLocalArray = (key, data) => {
    const currentData = localStorage.getItem(key);
    let dataArray = [];

    if (currentData === null)
        dataArray = data;

    localStorage.setItem(key, JSON.stringify(dataArray));
}

const setUserDataInLocal = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
}

const removeDataFromLocalArray = (key, delKey) => {
    const currentData = localStorage.getItem(key);
    let dataArray;

    if (currentData !== null)
    {
        dataArray = JSON.parse(currentData);
        dataArray = dataArray.filter(item => item.key !== delKey);
        localStorage.removeItem(key);
        if (dataArray.length !== 0)
            localStorage.setItem(key, JSON.stringify(dataArray))
    }
}

const removeDataFromLocalByKey = (key) => {
    localStorage.removeItem(key);
}

const getLocalToken = () => {
    let data = localStorage.getItem("userData");
    if (data !== null) {
        return JSON.parse(data).token;
    }
    return null;
}

const getLocalData = (key) => {
    let data = localStorage.getItem(key);
    if (data !== null)
        return JSON.parse(data);
    return [];
}

const setNewKey = (key) => {
    let data = localStorage.getItem(key);
    let lastData;
    if (data !== null)
    {
        data = JSON.parse(data);
        lastData = data[data.length-1]
        return lastData.key+1;
    }

    return 1;
}

export const localSt = {
    getLocalData,
    addDataToLocalArray,
    removeDataFromLocalArray,
    setNewKey,
    setUserDataInLocal,
    getLocalToken,
    setDataToLocalArray,
    removeDataFromLocalByKey
}