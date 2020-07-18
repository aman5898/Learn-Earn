import React from 'react';
import styles from '../../styles/App.scss'
import ActionButtons from "./ActionButtons"
import PropTypes from "prop-types";

function FeedInfo({title, description, likes, comments}) {
    return (
        <div className="container">
            <div className="row">
                <div className={styles.request_title}>
                    {title}
                </div>
            </div>
            <div className="row">
                <div className={styles.request_subtitle}>
                    <b>Description-</b>
                    {description}
                    {/* Expand on read more */}
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="row">
                <div className={styles.like_comments_count}>
                    <b>{likes} </b>
                    likes and
                    <b> {comments} </b>
                    comments
                </div>
                <hr className={styles.line} />
            </div>
            <ActionButtons isEvent={false} />
        </div>
    )
}

FeedInfo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number
}

export default FeedInfo;
