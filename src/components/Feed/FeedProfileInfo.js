import React from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";

function FeedProfileInfo({creator}){
    return(
        
            <div className="row">
                <img src={creator.avatar} alt="LearnAndEarn User" className= {styles.feedpic} />
                <div className="col">
                    <div className={styles.feedtitle}>
                        {creator.name}
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

FeedProfileInfo.propTypes = {
    creator: PropTypes.object
}

export default FeedProfileInfo;