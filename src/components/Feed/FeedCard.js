import React, { useState } from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import InterestedUsers from "./InterestedUsers";
import InformationButton from "./InformationButton";
import FeedInfo from "./FeedInfo";
import FeedTags from "./FeedTags";
import styles from "../../styles/App.scss";
import AddEventComponent from "./AddEventComponent";
import AddEventComponentExtended from "./AddEventComponentExtended";
import PropTypes from "prop-types";

import Events from "./Events";

function FeedCard({feed}) {
  const [addEventButton, flipAddEventButton] = useState(true);

  function clickAddEvent() {
    flipAddEventButton(!addEventButton);
    console.log(feed);
  }
  return (
    <div className={`${styles.feedcard} mb-5`}>
      <InformationButton />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <FeedProfileInfo creator={feed.created_by}/>
          </div>
          <InterestedUsers interested={feed.interested}/>
        </div>
        <div className="row">
          <div className="col">
            <FeedTags
              tags={feed.tags}
            />
          </div>
        </div>
        <div className="row">
          <FeedInfo title={feed.title} description={feed.description} likes={feed.likes} comments={feed.comments}/>
        </div>

        <div className={`row mt-3 ${styles.padding_left_right_2}`}>
          {addEventButton ? (
            <AddEventComponent onClick={clickAddEvent} />
          ) : (
            <AddEventComponentExtended onClick={clickAddEvent} />
          )}
        </div>
        <span className={styles.eventline}>Events for this request</span>
        <Events />
        <Events />
      </div>
    </div>
  );
}

FeedCard.propTypes = {
  feed: PropTypes.object
}

export default FeedCard;
