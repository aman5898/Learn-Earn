import React from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";

function Comment({ comment, replyHandler }) {
    return (
        <div className={`${styles.single_comment_container} row`}>
            <div className="col-2">
                <img src={comment.created_by.avatar} alt="LearnAndEarn User" className= {styles.comment_pic} />
            </div>
            <div className="col-10">
                <div className={styles.comment_user}>
                    <a href="#" className={styles.commenter_user_name}>{comment.created_by.name}</a>
                    <span className={styles.reply_comment} onClick={() => replyHandler(comment.created_by)}>
                        <ion-icon name="arrow-undo-circle"/>
                    </span>
                </div>
                <div className={styles.comment_text}>
                    {(comment.referenced_to) ? 
                        <a href="#">
                            <span className={styles.comment_user_tag}>
                                @{comment.referenced_to.name}
                            </span>
                        </a> 
                    : null}
                    {comment.text} 
                </div>
            </div>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.object,
    replyHandler: PropTypes.func
}

export default Comment;