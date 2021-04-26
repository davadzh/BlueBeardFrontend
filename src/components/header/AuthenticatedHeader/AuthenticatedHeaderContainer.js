import {connect} from "react-redux";
import {AuthenticatedHeader} from "./AuthenticatedHeader";
import {logout} from "../../../bll/redux/reducers/userReduser";

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const AuthenticatedHeaderContainer = connect(mapStateToProps, {
    logout
})(AuthenticatedHeader);

export default AuthenticatedHeaderContainer;