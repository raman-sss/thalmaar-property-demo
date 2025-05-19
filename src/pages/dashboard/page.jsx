import React from "react";
import LeftSide from "../../components/left-side/leftSide";
import RightSide from "../../components/right-side/rightSide";
import './page.css';

const Dashboard = () => {
    return (
        <div className="d-flex flex-column justify-content-between gap-5">
            <div className="col-sm-12 d-flex gap-5 parent">
                <LeftSide />
            </div>
            <div className="col-sm-12 d-flex gap-5 parent">
                <RightSide />
            </div>
        </div>
    )
}

export default Dashboard;