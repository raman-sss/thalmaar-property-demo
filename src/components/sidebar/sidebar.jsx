import React, { useState } from "react";
import styles from './page.module.css';
import styles2 from '../left-side/page.module.css';
import { FaPlay, FaStop } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const Sidebar = () => {

    const [buttonText, setButtonText]= useState('Start')

    const handleButtonClick= ()=> {
        if (buttonText === 'Start') {
            setButtonText('Stop');
        } else {
            setButtonText('Start');
        }
    }


    return (
        <div className={`d-flex flex-column gap-4 ${styles.sidebar}`}>
            <h3 className="mt-3 mb-5">Video Sources</h3>

            <hr />

            <div className="form-check d-flex flex-column gap-3 justify-content-between mb-3">
                <div>
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked />
                    <label className="form-check-label" htmlFor="radioDefault2">
                        Upload Video
                    </label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
                <button className={`d-flex gap-3 align-items-center ${styles.smallBtn}`}>
                    <span>Add video</span>
                    <FaCirclePlus />
                </button>

            </div>

            <hr />

            <div className="form-check d-flex flex-column gap-3 justify-content-between">
                <div>
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                    <label className="form-check-label" htmlFor="radioDefault2">
                        Live Camera
                    </label>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Add link</label>
                </div>
                <button className={`d-flex gap-3 align-items-center ${styles.smallBtn}`}>
                    <span>Add feed</span>
                    <FaCirclePlus />
                </button>
            </div>

            <hr />

            <button className={`d-flex gap-3 align-items-center ${styles.btn}`} onClick={handleButtonClick} style={buttonText === 'Start' ? { backgroundColor: '#000000' } : { backgroundColor: '#dc3545' }} >
                <span>{buttonText}</span>
                {buttonText=== 'Start' ? <FaPlay /> : <FaStop /> }
            </button>
        </div>
    )
};

export default Sidebar;