import React from "react";
import {Route, Switch} from "react-router-dom";
import MasterContainer from "./Masters/Master/MasterContainer";
import "./ContentWindow.scss"
import AddMasterContainer from "./Masters/AddMaster/AddMasterContainer";
import UpdateMasterContainer from "./Masters/UpdateMaster/UpdateMasterContainer";
import {Greetings} from "./Greetings/Greetings";
import WorkTypeContainer from "./WorkTypes/WorkType/WorkTypeContainer";
import UpdateWorkTypeContainer from "./WorkTypes/UpdateWorkType/UpdateWorkTypeContainer";
import AddWorkTypeContainer from "./WorkTypes/AddWorkType/AddWorkTypeContainer";
import RecordContainer from "./Records/Record/RecordContainer";
import AddRecordContainer from "./Records/AddRecord/AddRecordContainer";
import AddCustomerToRecordContainer from "./Records/AddCustomerToRecord/AddCustomerToRecordContainer";
import UpdateRecordContainer from "./Records/UpdateRecord/UpdateRecordContainer";
import {About} from "./About/About";


export const ContentWindow = (props) => {

    return (
        <div className={"content-window"}>
            <Switch>
                <Route path={"/"} exact render={() => <Greetings/>}/>
                <Route path={"/About"} exact render={() => <About/>}/>

                <Route path={"/Masters"} exact render={() => <MasterContainer/>}/>
                <Route path={"/AddMaster"} exact render={() => <AddMasterContainer/>}/>
                <Route path={"/UpdateMaster/"} render={() => <UpdateMasterContainer/>}/>

                <Route path={"/Records"} exact render={() => <RecordContainer/>}/>
                <Route path={"/AddRecord"} exact render={() => <AddRecordContainer/>}/>
                <Route path={"/AddCustomerToRecord"} render={() => <AddCustomerToRecordContainer/>}/>
                <Route path={"/UpdateRecord"} render={() => <UpdateRecordContainer/>}/>

                <Route path={"/WorkTypes"} exact render={() => <WorkTypeContainer/>}/>
                <Route path={"/AddWorkType"} exact render={() => <AddWorkTypeContainer/>}/>
                <Route path={"/UpdateWorkType/"} render={() => <UpdateWorkTypeContainer/>}/>
            </Switch>
        </div>
    );
}