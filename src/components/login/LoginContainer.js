import {connect} from "react-redux";
import {Login} from "./Login";
import {setAuth} from "../../bll/redux/reducers/userReduser";

let mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const LoginContainer = connect(mapStateToProps, {
    setAuth
})(Login);

export default LoginContainer;