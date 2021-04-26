import {connect} from "react-redux";
import {setCurrentRecord} from "../../../../../bll/redux/reducers/adminGeneralReducer";
import AddCustomerToRecord from "./AddCustomerToRecord";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const AddCustomerToRecordContainer = connect(mapStateToProps, {
    setCurrentRecord,
})(AddCustomerToRecord);

export default AddCustomerToRecordContainer;