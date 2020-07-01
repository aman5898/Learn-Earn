import React from "react";
import like from "../temp/like.png";
import interested from "../temp/interested.png";
import comment from "../temp/comment.png";
import styles from "../styles/App.scss";

function ActionButtonsforEvent() {
  return (
    <div className={"row"}>
      <div className={styles.actionbtnforevent}>
        <img
          src={interested}
          alt="interested"
          className={styles.action_buttonforevent_pic}
        />
        <span
          className={`${styles.font_600} ${styles.font_color_70} ${styles.font_size_1} `}
        >
          Interested
        </span>
      </div>
      <div className={styles.actionbtnforevent}>
        <img
          src={like}
          alt="like"
          className={`${styles.action_buttonforevent_pic} ${styles.width_8}`}
        />
        <span
          className={`${styles.font_600} ${styles.font_color_70} ${styles.font_size_1}`}
        >
          Like
        </span>
      </div>
      <div className={styles.actionbtnforevent}>
        <img
          src={comment}
          alt="comments"
          className={`${styles.action_buttonforevent_pic} ${styles.width_8}`}
        />
        <span
          className={`${styles.font_600} ${styles.font_color_70} ${styles.font_size_1}`}
        >
          Comments
        </span>
      </div>
    </div>
  );
}

export default ActionButtonsforEvent;
