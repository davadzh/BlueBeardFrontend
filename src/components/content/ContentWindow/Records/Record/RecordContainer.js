import {connect} from "react-redux";
import {Record} from "./Record";
import {setRecords} from "../../../../../bll/redux/reducers/adminGeneralReducer";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const RecordContainer = connect(mapStateToProps, {
    setRecords
})(Record);

export default RecordContainer;