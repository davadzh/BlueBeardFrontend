import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {adminGeneralReducer, masterReducer} from "./reducers/adminGeneralReducer";
import {userReduser} from "./reducers/userReduser";

let reducers = combineReducers({
    generalReducer: adminGeneralReducer,
    users: userReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers , composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;