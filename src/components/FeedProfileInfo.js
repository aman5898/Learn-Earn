import React from "react";
import styles from "../styles/App.scss";
import image from "../temp/image.jpg"

function FeedProfileInfo(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={image} alt="LearnAndEarn User" className= {styles.feedpic} />
                </div>
                <div className="col">
                    <div className={styles.feedtitle}>
                        John Doe
                    </div>
                    <div className="col">
                        Student CS at MAIT
                    </div>
                    <div className="col">
                        wants to learn
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedProfileInfo;