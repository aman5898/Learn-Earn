import React, { useState } from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import InterestedUsers from "./InterestedUsers";
import InformationButton from "./InformationButton";
import FeedInfo from "./FeedInfo";
import FeedTags from "./FeedTags";
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
        <div className="row">
          <div className="col"><FeedTags tags={[{tag_name: 'C++'}, {tag_name: 'Java'}, {tag_name: 'Interview Questions'}, {tag_name: 'Node Js Basics'}, {tag_name: 'React Js'}]}/></div>
        </div>
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
        <span className={styles.eventline}>
              Events for this request
        </span>
        <Events />
        <Events />
      </div>
    </div>
  );
}

export default FeedCard;
