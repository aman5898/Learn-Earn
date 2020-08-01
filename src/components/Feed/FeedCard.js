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

function FeedCard({ feed, displayFeedComments, displayEventComments, userInfo }) {
  const [addEventButton, flipAddEventButton] = useState(true);

  function clickAddEvent() {
    flipAddEventButton(!addEventButton);
    console.log(feed)
  }
  
  return (
    <div className={`${styles.feedcard} mb-5`}>
      <InformationButton />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <FeedProfileInfo creator={feed.created_by} />
          </div>
          <InterestedUsers interested={feed.interested_users}/>
        </div>
        <div className="row">
          <div className="col">
            <FeedTags tags={feed.tags} />
          </div>
        </div>
        <div className="row">
          <FeedInfo 
            id={feed.id} 
            title={feed.title} 
            description={feed.description} 
            likes_users={feed.likes_users} 
            comments={feed.comments} 
            displayFeedComments={displayFeedComments} 
            userInfo={userInfo}
          />
        </div>

        <div className={`row mt-3 ${styles.padding_left_right_2}`}>
          {addEventButton ? (
            <AddEventComponent onClick={clickAddEvent} />
          ) : (
            <AddEventComponentExtended
              onClick={clickAddEvent}
              requestId={feed.id}
            />
          )}
        </div>
        <span className={styles.eventline}>Events for this request</span>
        <Events id={'5ef1c7e4c439970176d62fba'} displayEventComments={displayEventComments}/>
        <Events id={'5ef1c7e4c439970176d62fba'} displayEventComments={displayEventComments}/>
      </div>
    </div>
  );
}

FeedCard.propTypes = {
  feed: PropTypes.object,
  displayFeedComments: PropTypes.func,
  displayEventComments: PropTypes.func
}

export default FeedCard;
