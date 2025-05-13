import React, { useState } from "react";
import styles from './page.module.css';
import styles2 from '../left-side/page.module.css';
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const RightSide = () => {

    const [newRule, setNewRule]= useState("");
    const [rules, setRules]= useState(["Find person if seen 5 times carrying pen", "Find person if seen moving suspiciously", "Find if seen moving suspiciously"]);

    const removeRule = (index) => {
        const newRules = [...rules];
        newRules.splice(index, 1);
        setRules(newRules);
    }
    const addRule = (rule) => {
        setRules([...rules, rule]);
    }

    return (
        <>
            <div className={`d-none ${styles2.box}`}>
                <h3 className="mt-3 mb-5">Daily Analytics</h3>
                <div className="d-flex justify-content-between mb-4">
                    <div className="d-flex flex-column">
                        <h2>11</h2>
                        <span>Triggers</span>
                    </div>
                    <div className="d-flex flex-column">
                        <h2>20</h2>
                        <span>Violations</span>
                    </div>
                    <div className="d-flex flex-column">
                        <h2>3</h2>
                        <span>High Risk Zones</span>
                    </div>
                    <div className="d-flex flex-column">
                        <h2>25%</h2>
                        <span>Rise in Violations</span>
                    </div>
                </div>
            </div>


            <div className={styles2.box}>
                <h3 className="mt-3 mb-5">Deep Scene Understanding Rules</h3>

                    {
                        rules.map((rule, index) => (
                            <div className={`d-flex flex-row justify-content-between mb-4`} key={index}>
                                <span>Rule {index + 1}</span>
                                <span>{rule}</span>
                                <div>
                                    <MdEdit className= {styles.icon}/>
                                    <MdDelete className= {styles.icon} onClick={()=> {
                                        removeRule(index);
                                    }}/>
                                </div>
                            </div>
                        ))
                    }

                    <div className={`d-flex flex-row justify-content-between mb-4`}>
                    <span>Rule 4</span>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Add new rule" onChange={(e) => setNewRule(e.target.value)}/>
                    <div>
                        <IoMdAddCircle className= {styles.icon} onClick={()=> {addRule(newRule)}}/>
                    </div>
                </div>

            </div>


            <div className={`${styles2.box} ${styles2.summary}`}>
                <h3 className="mt-3 mb-5">Detections</h3>
                <div className="d-flex flex-row mb-4 justify-content-between">
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Camera Feed 2
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Camera Feed 1</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Camera Feed 2</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Camera Feed 3</a></li>
                        </ul>
                    </div>

                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Rule Triggered</th>
                            <th scope="col">Time</th>
                            <th scope="col">Confidence</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Rule 3</td>
                            <td>12:00:23</td>
                            <td>83%</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Rule 1</td>
                            <td>10:26:38</td>
                            <td>78%</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Rule 2</td>
                            <td>08:40:23</td>
                            <td>90%</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default RightSide;