import React from "react";
import LeftSide from "../../components/left-side/leftSide";
import RightSide from "../../components/right-side/rightSide";

const Dashboard = () => {
    return (
        <div className="d-flex flex-column justify-content-between gap-5">
            <div className="col-sm-12 d-flex gap-5">
                <LeftSide />
            </div>
            <div className="col-sm-12 d-flex gap-5">
                <RightSide />
            </div>
        </div>
    )
}

export default Dashboard;