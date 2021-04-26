import {connect} from "react-redux";
import {logout} from "../../../../bll/redux/reducers/userReduser";
import {AuthenticatedNavbar} from "./AuthenticatedNavbar";

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const AuthenticatedNavbarContainer = connect(mapStateToProps, {
    logout
})(AuthenticatedNavbar);

export default AuthenticatedNavbarContainer;