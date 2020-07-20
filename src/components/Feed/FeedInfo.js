import React, {useState} from 'react';
import styles from '../../styles/App.scss'
import ActionButtons from "./ActionButtons"
import PropTypes from "prop-types";

function FeedInfo({title, description, likes, comments, displayFeedComments}) {

    const [collapsed, setCollapsed] = useState(true);

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
                    {collapsed && description.substring( 0, 140)}
                    {collapsed && description.length > 140 && <span style={{color: "blue"}} className={styles.cursor_pointer} onClick={ () => setCollapsed(!collapsed)}>...Read More</span>}
                    {!collapsed && description}
                    {!collapsed && <span style={{color: "blue"}} className={styles.cursor_pointer} onClick={ () => setCollapsed(!collapsed)}> Show Less</span>}
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
            <ActionButtons isEvent={false} displayFeedComments={displayFeedComments}/>
        </div>
    )
}

FeedInfo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
    displayFeedComments: PropTypes.func
}

export default FeedInfo;
