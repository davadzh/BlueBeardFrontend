import {connect} from "react-redux";
import {setWorkTypes} from "../../../../../bll/redux/reducers/adminGeneralReducer";
import {WorkType} from "./WorkType";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const WorkTypeContainer = connect(mapStateToProps, {
    setWorkTypes
})(WorkType);

export default WorkTypeContainer;