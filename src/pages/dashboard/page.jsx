import React from "react";
import LeftSide from "../../components/left-side/leftSide";
import RightSide from "../../components/right-side/rightSide";

const Dashboard = () => {
    return (
        <div className="d-flex flex-row justify-content-between">
            <div className="col-sm-6 d-flex flex-column gap-5">
                <LeftSide />
            </div>
            <div className="col-sm-6  d-flex flex-column gap-5">
                <RightSide />
            </div>
        </div>
    )
}

export default Dashboard;