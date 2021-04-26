import {connect} from "react-redux";
import {Master} from "./Master";
import {setMasters} from "../../../../../bll/redux/reducers/adminGeneralReducer";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const MasterContainer = connect(mapStateToProps, {
    setMasters
})(Master);

export default MasterContainer;