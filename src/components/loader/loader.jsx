import React from "react";
import styles from './loader.module.css';

export const Loader= ({style})=> {
    return(
        <>
            <span className={`${styles.loader}`} style={style}></span>
        </>
    )
}

export default Loader;