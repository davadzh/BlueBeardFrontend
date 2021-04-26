import {connect} from "react-redux";
import {
    setCurrentRecord,
    setMasters,
    setWorkTypes
} from "../../../../../bll/redux/reducers/adminGeneralReducer";
import UpdateRecord from "./UpdateRecord";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const UpdateRecordContainer = connect(mapStateToProps, {
    setCurrentRecord,
    setMasters,
    setWorkTypes
})(UpdateRecord);

export default UpdateRecordContainer;