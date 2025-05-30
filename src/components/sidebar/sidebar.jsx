import React, { useState } from "react";
import styles from './page.module.css';
import styles2 from '../left-side/page.module.css';
import { FaPlay, FaStop } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import axios from "axios";
import { url } from "../../constants/constants";
import Loader from "../loader/loader";

const Sidebar = () => {

    const [buttonText, setButtonText] = useState('Start');

    const [video, setVideo] = useState();
    const [videoLink, setVideoLink] = useState("");
    const [loading, setloading] = useState(false);

    const handleButtonClick = () => {
        if (buttonText === 'Start') {
            setButtonText('Stop');
        } else {
            setButtonText('Start');
        }
    }

    async function uploadVideo(e) {
        e.preventDefault();
        setloading(true);

        let formData = new FormData();
        formData.append('video', video);
        // formData.append('file', refFile);

        try {
            const response = await axios.post(`${url}/upload-to-s3`, formData);
            console.log(response);

            const videoUrl = response.data.s3_url;
            const videoId = response.data.video_id;
            console.log("Video uploaded successfully:", videoId);

            setVideoLink(videoUrl);

            localStorage.setItem('videoLink', videoUrl);
            localStorage.setItem('video_id', videoId);
            setloading(false);

            console.log("Video link set:", videoLink);


        } catch (error) {
            console.error("Upload failed:", error);
            if (error.response) {
                console.error("Server responded:", error.response.data);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error setting up request:", error.message);
            }
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
                    <input type="file" className="form-control" id="inputGroupFile02" onChange={(e) => {
                        const file = e.target.files[0];
                        // console.log(file);
                        setVideo(file);
                    }
                    } />
                    <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                </div>
                <button className={`d-flex gap-3 align-items-center ${styles.smallBtn}`} onClick={uploadVideo}>
                    <span>
                        {loading
                            ?
                            <Loader
                                style={{
                                    width: '1em',
                                    height: '1em',
                                    borderTop: '3px solid #fff',
                                    margin: 'auto',
                                    // left: '50%',
                                    position: 'relative'
                                }}
                            />
                            :
                            "Add video"}
                    </span>
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
                    <input type="file" className="form-control" id="inputGroupFile02" onChange={(e) => {
                        setVideoLink(e.target.value);
                    }
                    } />
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
                {buttonText === 'Start' ? <FaPlay /> : <FaStop />}
            </button>
        </div>
    )
};

export default Sidebar;