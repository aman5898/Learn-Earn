import React from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import styles from "../styles/App.scss";

function FeedCard(){
    return(
        <div className= {styles.feedcard}>
            <FeedProfileInfo />
        </div>
    );
}

export default FeedCard;