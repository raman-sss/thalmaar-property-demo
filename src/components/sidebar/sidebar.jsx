import React from "react";
import styles from './page.module.css';

const Sidebar= ()=> {
    return (
        <div className={`d-flex flex-column gap-4 ${styles.sidebar}`}>
            <h3>THALMAAR</h3>
            <hr />
            <span>Home</span>
            <hr/>
            <span>Dashboard</span>
            <hr/>
            <span>Profile</span>
            <hr/>
            <span>Settings</span>
            <hr />
        </div>
    )
};

export default Sidebar;