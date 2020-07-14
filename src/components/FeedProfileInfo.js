import React from "react";
import styles from "../styles/App.scss";
import image from "../temp/image.jpg";

function FeedProfileInfo(){
    return(
        
            <div className="row">
                <img src={image} alt="LearnAndEarn User" className= {styles.feedpic} />
                <div className="col">
                    <div className={styles.feedtitle}>
                        John Doe
                    </div>
                    <div className={styles.feedsubtitle}>
                        Student CS at MAIT
                    </div>
                    <div className={styles.moreinfo}>
                        wants to learn
                    </div>
                </div>
            </div>
        
    );
}

export default FeedProfileInfo;