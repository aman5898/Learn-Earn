import React, {useState} from 'react';
import styles from '../../styles/App.scss'
import ActionButtons from "./ActionButtons"
import PropTypes from "prop-types";

function FeedInfo({id, title, description, likes, likes_users, comments, displayFeedComments, userInfo}) {

    const [collapsed, setCollapsed] = useState(true);
    const [userLike, setUserLike] = useState(0);

    function userLikeFunc(userLiked, likeActive) {
        if(userLiked){
            likeActive == false ? setUserLike(0) : setUserLike(-1);
        }else{
            likeActive == false ? setUserLike(1) : setUserLike(0);
        }
    }

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
                    <b>{likes + userLike} </b>
                    likes and
                    <b> {comments} </b>
                    comments
                </div>
                <hr className={styles.line} />
            </div>
            <ActionButtons requestId={id} isEvent={false} displayFeedComments={displayFeedComments} likes_users={likes_users} userInfo={userInfo} userLikeFunc={userLikeFunc}/>
        </div>
    )
}

FeedInfo.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
    displayFeedComments: PropTypes.func
}

export default FeedInfo;
