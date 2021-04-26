const SET_MASTERS = "SET_MASTERS";
const SET_CURRENT_MASTER = "SET_CURRENT_MASTER";
const SET_WORKTYPES = "SET_WORKTYPES";
const SET_CURRENT_WORKTYPE = "SET_CURRENT_WORKTYPE";
const SET_RECORDS = "SET_RECORD";
const SET_CURRENT_RECORD = "SET_CURRENT_RECORD";


let initialState = {
    masters: [],
    currentMaster: {},
    workTypes: [],
    currentWorkType: {},
    records: [],
    currentRecord: {}
};


// Action Creators
export const setMasters = (masters) => ({type: SET_MASTERS, masters});
export const setWorkTypes = (workTypes) => ({type: SET_WORKTYPES, workTypes});
export const setRecords = (records) => ({type: SET_RECORDS, records});
export const setCurrentMaster = (currentMaster) => ({type: SET_CURRENT_MASTER, currentMaster});
export const setCurrentWorkType = (currentWorkType) => ({type: SET_CURRENT_WORKTYPE, currentWorkType});
export const setCurrentRecord = (currentRecord) => ({type: SET_CURRENT_RECORD, currentRecord});

export let adminGeneralReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    switch (action.type) {

        case SET_MASTERS:
            stateCopy.masters = action.masters.data;
            return stateCopy;

        case SET_CURRENT_MASTER:
            stateCopy.currentMaster = action.currentMaster.data;
            return stateCopy;

        case SET_WORKTYPES:
            stateCopy.workTypes = action.workTypes.data;
            return stateCopy;

        case SET_CURRENT_WORKTYPE:
            stateCopy.currentWorkType = action.currentWorkType.data;
            return stateCopy;

        case SET_RECORDS:
            stateCopy.records = action.records.data;
            return stateCopy;

        case SET_CURRENT_RECORD:
            stateCopy.currentRecord = action.currentRecord.data;
            return stateCopy;

        default:
            return state;
    }
}