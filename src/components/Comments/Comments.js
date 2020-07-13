import React, { useState } from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";

import Comment from "./Comment";

function Comments({ comments, type, type_id }) {

    const [newComment, setNewComment] = useState('');

    return (
        <div className={`${styles.comments_card} mb-5`}>  
            <div className="container">
                <div className="row">
                    <div className={`${styles.comments_header} col`}>
                        <div className={styles.comments_btn}>
                            <ion-icon name="arrow-back-circle" />
                        </div>
                        <div className={styles.comments_heading} >
                            Comments
                        </div>
                    </div>
                </div>

                {/* List of comments */}
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
                        <ion-icon name="paper-plane" size="large"></ion-icon>
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