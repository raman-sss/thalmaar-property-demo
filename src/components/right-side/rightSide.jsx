import React from "react";
// import styles from './page.module.css';
import styles2 from '../left-side/page.module.css';
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import ReactPlayer from "react-player";


const RightSide = () => {
    return (
        <>
            <div className={styles2.box}>
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
                <h3 className="mt-3 mb-5">Policy and Triggers</h3>
                <div className={`d-flex flex-row justify-content-between mb-4`}>
                    <span>Trigger 1</span>
                    <span>"Find person if seen 5 times carrying pen"</span>
                    <div>
                        <MdEdit />
                        <MdDelete />
                    </div>
                </div>
                <div className={`d-flex flex-row justify-content-between mb-4`}>
                    <span>Trigger 2</span>
                    <span>"Find person if seen moving suspiciously"</span>
                    <div>
                        <MdEdit />
                        <MdDelete />
                    </div>
                </div>
                <div className={`d-flex flex-row justify-content-between mb-4`}>
                    <span>Trigger 3</span>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Add new trigger" />
                    <div>
                        <IoMdAddCircle />
                    </div>
                </div>


            </div>


            <div className={`${styles2.box} ${styles2.summary}`}>
                <h3 className="mt-3 mb-5">Detections</h3>
                <div className="d-flex flex-row mb-4 justify-content-between">
                    <div class="btn-group">
                        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Camera Feed 2
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Camera Feed 1</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Camera Feed 2</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Camera Feed 3</a></li>
                        </ul>
                    </div>
                    <span>Trigger 3</span>
                    <span>12:00:23</span>
                    <span>67%</span>
                </div>
                
                <ReactPlayer url='https://youtu.be/mJVuZiK9a6I?si=8jEaKk7X1iX5qqrE'playing= 'true' volume={0} style={{margin: 'auto'}}/>
                
            </div>
        </>
    )
}

export default RightSide;