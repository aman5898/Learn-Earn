import React from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import InterestedUsers from "./InterestedUsers"
import InformationButton from "./InformationButton";
import styles from "../styles/App.scss";

function FeedCard(){
    return(
        <div className= {styles.feedcard}>
            <InformationButton />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <FeedProfileInfo />
                    </div>
                    <div className="col">
                        <InterestedUsers />  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;