import React, { useState } from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Comment from "./Comment";

function Comments({ comments, type, type_id }) {

    const [newComment, setNewComment] = useState('');

    return (
        <div className={`${styles.comments_card} mb-5`}>  
            <div className="container">
                <div className="row">
                    <div className={styles.comments_header}>
                        <div className={styles.comments_btn}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} color="white" size="3x" />
                        </div>
                        <div className={styles.comments_heading} >
                            Comments
                        </div>
                    </div>
                </div>

                <Comment />
                <Comment />

                <div className={`${styles.type_comment_container} row`}>
                    <div className={`${styles.typing_container} col-10`}>
                        <input 
                            placeholder="Start Typing..."
                            value={newComment}
                            className={styles.comment_input}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>
                    <div className={`${styles.comments_btn__right} col-2`}>
                        <FontAwesomeIcon icon={faPaperPlane} color="#005CE6" size="2x" />
                    </div>
                </div>   

            </div>
        </div>
    );
}

Comments.propTypes = {
    comments: PropTypes.array,
    type: PropTypes.string,
    type_id: PropTypes.string
}

export default Comments;