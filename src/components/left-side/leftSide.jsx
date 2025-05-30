import React, { useEffect, useState } from "react";
import styles from './page.module.css';
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { url } from "../../constants/constants";
import Loader from "../loader/loader";

const LeftSide = () => {

    const [activeTab, setActiveTab] = useState(2);

    const [link, setLink] = useState(null);

    const [responseText, setResponseText] = useState('');

    const [loading, setLoading] = useState(false);

    async function analyzeVideo(e) {
        e.preventDefault();
        setLoading(true);

        const video_id = localStorage.getItem('video_id');
        // const prompt = 'explain the video';

        if (!video_id || !prompt) {
            console.error("Missing video_id or prompt in localStorage");
            return;
        }

        const formData = new FormData();
        formData.append('video_id', video_id);
        formData.append('prompt', prompt);

        try {
            const response = await fetch(`${url}/analyze-video`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server responded with ${response.status}: ${errorText}`);
            }

            const result = await response.json();
            console.log("Gemini response:", result.response);
            setResponseText(result.response);
            setLoading(false);
            return result.response;

        } catch (error) {
            console.error("Error analyzing video:", error);
            return null;
        }
    }


    // Poll localStorage every second for a new videoLink and update link immediately when found
    useEffect(() => {
        const storedLink = typeof window !== "undefined" ? localStorage.getItem("videoLink") : null;
        if (storedLink) {
            setLink(storedLink);
        }

        const interval = setInterval(() => {
            const latestLink = localStorage.getItem("videoLink");
            if (latestLink && latestLink !== link) {
                setLink(latestLink);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [link]);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    }



    return (
        <>
            {/* <div className={styles.box}>
                <h3 className="mt-3 mb-5">Video Sources</h3>
                <div className="form-check d-flex justify-content-between mb-3">
                    <div>
                        <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked />
                        <label className="form-check-label" htmlFor="radioDefault2">
                            Upload Video
                        </label>
                    </div>
                    <div className="input-group mb-3" style={{ width: '75%' }}>
                        <input type="file" className="form-control" id="inputGroupFile02" />
                        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                    </div>
                </div>

                <div className="form-check d-flex justify-content-between">
                    <div>
                        <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                        <label className="form-check-label" htmlFor="radioDefault2">
                            Live Camera
                        </label>
                    </div>
                    <div className="input-group mb-3" style={{ width: '75%' }}>
                        <input type="file" className="form-control" id="inputGroupFile02" />
                        <label className="input-group-text" htmlFor="inputGroupFile02">Add link</label>
                    </div>
                </div>

                <button className={`d-flex gap-3 align-items-center ${styles.btn}`}>
                    <span>Start</span>
                    <FaPlay />
                </button>

            </div> */}




            <div className={styles.box}>
                <h3 className="mt-3 mb-5">Live Activity</h3>
                <div className={`d-flex flex-row gap-3 ipad-hide ${styles.video}`}>
                    <div style={{margin: 'auto'}}>
                        {link ? (
                            <ReactPlayer url={link} playing={true} volume={0} width={750} height={500} controls= {true} loop= {true}/>
                        ) : (
                            <div style={{ width: 750, height: 500, background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                No video
                            </div>
                        )}
                    </div>

                </div>

                <div className={`d-flex flex-row gap-3 desktop-hide ${styles.video}`}>
                    <div>
                        <ReactPlayer url='https://youtu.be/4jnzf1yj48M?si=VKeIBqQtQ6mHXCb3' playing='true' volume={0} width={200} height={220} />
                    </div>
                    <div>
                        <ReactPlayer url='https://youtu.be/2v_7UH_nLv4?si=P3jITcTt5N1zQilD' playing='true' volume={0} width={200} height={220} />
                    </div>
                </div>


            </div>


            <div className={`${styles.box} ${styles.summary}`}>
                <div className="d-flex justify-content-between align-items-center mt-3 mb-5">
                    <h3>Detailed Scene Analysis</h3>
                    <button className="mt-3 mb-5" onClick={analyzeVideo}>
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
                        "Generate Live Summary"}
                    </button>
                </div>
                
                
                <ul className="nav nav-tabs">
                    <li
                        className={`nav-item nav-link ${styles.listItem} ${activeTab === 1 ? "active" : ""}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Camera Feed 1
                    </li>
                    <li
                        className={`nav-item nav-link ${styles.listItem} ${activeTab === 2 ? "active" : ""}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Camera Feed 2
                    </li>
                    <li
                        className={`nav-item nav-link ${styles.listItem} ${activeTab === 3 ? "active" : ""}`}
                        onClick={() => handleTabClick(3)}
                    >
                        Camera Feed 3
                    </li>
                </ul>
                <p>{responseText || "No analysis yet."}</p>
            </div>
        </>
    )
}

export default LeftSide;