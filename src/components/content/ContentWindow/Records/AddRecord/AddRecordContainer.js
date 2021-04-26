import {connect} from "react-redux";
import AddRecord from "./AddRecord";
import {setCurrentRecord, setMasters, setWorkTypes} from "../../../../../bll/redux/reducers/adminGeneralReducer";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const AddRecordContainer = connect(mapStateToProps, {
    setCurrentRecord,
    setMasters,
    setWorkTypes
})(AddRecord);

export default AddRecordContainer;