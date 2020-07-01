import React, { useState } from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import InterestedUsers from "./InterestedUsers";
import InformationButton from "./InformationButton";
import FeedInfo from "./FeedInfo";
import styles from "../styles/App.scss";
import AddEventComponent from "../components/AddEventComponent";
import AddEventComponentExtended from "../components/AddEventComponentExtended";

function FeedCard() {
  const [clicked, setClicked] = useState(true);

  function clickFunction() {
    setClicked(!clicked);
  }
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
          <div className="col">
            {clicked ? (
              <AddEventComponent onClick={clickFunction} />
            ) : (
              <AddEventComponentExtended onClick={clickFunction} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
