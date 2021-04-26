import {connect} from "react-redux";
import {setCurrentWorkType, setMasters} from "../../../../../bll/redux/reducers/adminGeneralReducer";
import {UpdateWorkType} from "./UpdateWorkType";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const UpdateWorkTypeContainer = connect(mapStateToProps, {
    setCurrentWorkType
})(UpdateWorkType);

export default UpdateWorkTypeContainer;