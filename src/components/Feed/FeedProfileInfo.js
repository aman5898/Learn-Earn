import React from "react";
import styles from "../../styles/App.scss";

function FeedProfileInfo({userInfo}){
    return(
        
            <div className="row">
                <img src={userInfo.avatar} alt="LearnAndEarn User" className= {styles.feedpic} />
                <div className="col">
                    <div className={styles.feedtitle}>
                        {userInfo.name}
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