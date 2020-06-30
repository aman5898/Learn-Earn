import React from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import InterestedUsers from "./InterestedUsers";
import InformationButton from "./InformationButton";
import FeedInfo from "./FeedInfo";
import styles from "../styles/App.scss";
import AddEventComponent from "../components/AddEventComponent";

function FeedCard() {
  return (
    <div className={`${styles.feedcard} mb-5`}>
      <InformationButton />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <FeedProfileInfo />
          </div>
          <InterestedUsers />
        </div>
        <div className="row">{/* Tags come here */}</div>
        <div className="row">
          <FeedInfo />
        </div>
        <div className="row mt-3">
          <div className="col"></div>
          <div className="col-10">
            <AddEventComponent />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
