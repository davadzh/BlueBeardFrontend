import {connect} from "react-redux";
import {AddMaster} from "./AddMaster";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const AddMasterContainer = connect(mapStateToProps, {

})(AddMaster);

export default AddMasterContainer;