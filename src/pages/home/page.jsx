import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Dashboard from "../dashboard/page";

const Home= ()=> {
    return (
        <div className="col-sm-12 d-flex flex-row">
            <div className="col-sm-2 ipad-hide">
              <Sidebar />
            </div>
            <div className="col-sm-10 ipad-hide">
              <Dashboard />
            </div>
            <div className="col-sm-12 desktop-hide">
              <Dashboard />
            </div>
          </div>
    )
}

export default Home;