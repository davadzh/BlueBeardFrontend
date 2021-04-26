import {connect} from "react-redux";
import {ContentWindow} from "./ContentWindow";

let mapStateToProps = (state) => {
    return {
        general: state.generalReducer
    }
}

const ContentWindowContainer = connect(mapStateToProps, {

})(ContentWindow);

export default ContentWindowContainer;