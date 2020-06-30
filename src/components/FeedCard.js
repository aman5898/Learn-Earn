import React from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import InterestedUsers from "./InterestedUsers"
import InformationButton from "./InformationButton";
import FeedInfo from "./FeedInfo"
import styles from "../styles/App.scss";

function FeedCard(){
    return(
        <div className= {styles.feedcard}>
            <InformationButton />
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <FeedProfileInfo />
                    </div>
                    <InterestedUsers />  
                </div>
                <div className="row">
                    {/* Tags come here */}
                </div>
                <div className="row">
                    <FeedInfo />
                </div>
            </div>
        </div>
    );
}

export default FeedCard;