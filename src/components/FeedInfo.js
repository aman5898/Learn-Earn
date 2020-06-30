import React from 'react';
import styles from '../styles/App.scss'
import ActionButtons from "./ActionButtons"

function FeedInfo() {
    return (
        <div className="container">
            <div className="row">
                <div className={styles.request_title}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </div>
            </div>
            <div className="row">
                <div className={styles.request_subtitle}>
                    <b>Description-</b>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore aliqua. Lorem ipsum dolor.. 
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="row">
                <div className={styles.like_comments_count}>
                    <b>400 </b>
                    likes and
                    <b> 30 </b>
                    comments
                </div>
                <hr className={styles.line} />
            </div>
            <ActionButtons />
        </div>
    )
}

export default FeedInfo;
