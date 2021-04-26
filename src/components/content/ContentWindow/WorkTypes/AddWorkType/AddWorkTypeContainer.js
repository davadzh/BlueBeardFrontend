import {connect} from "react-redux";
import {AddWorkType} from "./AddWorkType";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const AddWorkTypeContainer = connect(mapStateToProps, {

})(AddWorkType);

export default AddWorkTypeContainer;