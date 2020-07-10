import React, { useState } from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import InterestedUsers from "./InterestedUsers";
import InformationButton from "./InformationButton";
import FeedInfo from "./FeedInfo";
import styles from "../styles/App.scss";
import AddEventComponent from "../components/AddEventComponent";
import AddEventComponentExtended from "../components/AddEventComponentExtended";

import Events from "./Events";

function FeedCard() {
  const [addEventButton, flipAddEventButton] = useState(true);

  function clickAddEvent() {
    flipAddEventButton(!addEventButton);
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
            {addEventButton ? (
              <AddEventComponent onClick={clickAddEvent} />
            ) : (
              <AddEventComponentExtended onClick={clickAddEvent} />
            )}
          </div>
        </div>

        <Events />
        <Events />
      </div>
    </div>
  );
}

export default FeedCard;
