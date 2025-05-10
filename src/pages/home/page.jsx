import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Dashboard from "../dashboard/page";

const Home= ()=> {
    return (
        <div className="col-sm-12 d-flex flex-row">
            <div className="col-sm-2">
              <Sidebar />
            </div>
            <div className="col-sm-10">
              <Dashboard />
            </div>
          </div>
    )
}

export default Home;