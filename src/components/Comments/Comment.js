import React from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

import image from "../../temp/image.jpg";

function Comment({ comment }) {
    return (
        <div className={`${styles.single_comment_container} row`}>
            <div className="col-2">
                <img src={image} alt="LearnAndEarn User" className= {styles.comment_pic} />
            </div>
            <div className="col-10">
                <div className={styles.comment_user}>
                    Mike Doe 
                    <span className={styles.reply_comment}>
                        <FontAwesomeIcon icon={faReply} color="#666" />
                    </span>
                </div>
                <div className={styles.comment_text}>
                    <span className={styles.comment_user_tag}>@Jenny Doe</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus turpis, molestie nec tempus a, finibus sit amet nunc. Mauris iaculis tortor a velit dapibus, non faucibus magna blandit. 
                </div>
            </div>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.object,
}

export default Comment;