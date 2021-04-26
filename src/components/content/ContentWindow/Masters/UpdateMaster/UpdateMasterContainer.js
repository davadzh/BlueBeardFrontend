import {connect} from "react-redux";
import {setCurrentMaster, setMasters} from "../../../../../bll/redux/reducers/adminGeneralReducer";
import {UpdateMaster} from "./UpdateMaster";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const UpdateMasterContainer = connect(mapStateToProps, {
    setCurrentMaster
})(UpdateMaster);

export default UpdateMasterContainer;