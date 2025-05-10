import React from "react";
import styles from './page.module.css';
import './page.css';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-page d-flex m-0">
            <div className={`col-sm-6 ${styles.row}`}>
                <div className={`d-flex justify-content-center flex-column ${styles.loginImage}`}>
                    <h3>Welcome</h3>
                    <p>Please Sign in into your account with the provided details to continue</p>
                </div>
            </div>
            <div className={`col-sm-6 d-flex justify-content-center flex-column align-items-center ${styles.loginText} ${styles.row}`}>
                <h2>Sign In to your account</h2>
                <form className={`col-sm-6 d-flex justify-content-center flex-column align-items-center`}>
                    <input type="text" id="fname" name="firstname" placeholder="Email address" />
                    <input type="text" id="lname" name="lastname" placeholder="Password" />
                    <button type="submit" className="btn btn-primary"><Link to='/home'>Login</Link></button>
                </form>
            </div>
        </div>


    )
};

export default Login;