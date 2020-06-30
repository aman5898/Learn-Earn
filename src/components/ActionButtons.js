import React from 'react';
import like from "../temp/like.png"
import interested from "../temp/interested.png"
import comment from "../temp/comment.png"
import styles from '../styles/App.scss'

function ActionButtons() {
    return (
        <div className="row">
            <div className={styles.actionbtn}>
                <img src={interested} alt="interested" className={styles.action_button_pic}/>
                Interested
            </div>
            <div className={styles.actionbtn}>
                <img src={like} alt="like" className={styles.action_button_pic}/>Like
            </div>
            <div className={styles.actionbtn}>
                <img src={comment} alt="comments" className={styles.action_button_pic}/>Comments
            </div>
        </div>
    );
}

export default ActionButtons;
