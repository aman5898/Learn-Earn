import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import PropTypes from "prop-types";

import styles from "../../styles/App.scss";
import FeedCard from './FeedCard'
import Comments from '../Comments/Comments';

function FeedSwitch({ feed, userInfo }) {

    const [showFeedComments, setShowFeedComments] = useState(false);
    const [showEventComments, setShowEventComments] = useState(false);
    const [eventId, setEventId] = useState('');

    const displayFeedComments = (newValue) => {
        setShowFeedComments(newValue);
    }

    const displayEventComments = (newValue, newEventId = '') => {
        setShowEventComments(newValue);
        setEventId(newEventId);
    }

    return(
        <div className={styles.feed_switch_container}>
            <ReactCardFlip isFlipped={showFeedComments || showEventComments} flipDirection="horizontal">
                <FeedCard feed={feed} displayFeedComments={displayFeedComments} displayEventComments={displayEventComments} userInfo={userInfo}/>
                {showEventComments ? 
                    <Comments type={'event'} type_id={eventId} displayFeedComments={displayFeedComments} displayEventComments={displayEventComments}/>
                : 
                    <Comments type={'request'} type_id={feed.id} displayFeedComments={displayFeedComments} displayEventComments={displayEventComments}/> 
                }
            </ReactCardFlip>
        </div>
    )
}

FeedSwitch.propTypes = {
    feed: PropTypes.object.isRequired
}

export default FeedSwitch;