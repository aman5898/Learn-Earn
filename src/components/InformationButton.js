import React from 'react';
import styles from "../styles/App.scss";
import image from "../temp/info.png";


function InformationButton (){

    var clickHandler = () => {
        console.log("Button clicked!");
    }

    return (
        <div className={styles.infobtn} onClick={clickHandler}>
            <img src={image} alt="info button" className={styles.infobtnpic} />
        </div>
    );
}

export default InformationButton;
