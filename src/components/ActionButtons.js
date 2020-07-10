import React from "react";
import like from "../temp/like.png";
import interested from "../temp/interested.png";
import comment from "../temp/comment.png";
import styles from "../styles/App.scss";

function ActionButtons({ isEvent }) {
  return (
    // Cursor: pointer
    <div className="row">
      <div className={`${styles.actionbtn} `}>
        <img
          src={interested}
          alt="interested"
          className={` ${
            isEvent
              ? styles.action_buttonforevent_pic
              : styles.action_button_pic
          } `}
        />
        <span
          className={`${isEvent && styles.font_size_1} ${
            isEvent && styles.font_color_70
          } ${isEvent && styles.font_600}`}
        >
          Interested
        </span>
      </div>
      <div className={styles.actionbtn}>
        <img
          src={like}
          alt="like"
          className={` ${
            isEvent
              ? styles.action_buttonforevent_pic
              : styles.action_button_pic
          } `}
        />
        <span
          className={`${isEvent && styles.font_size_1} ${
            isEvent && styles.font_color_70
          } ${isEvent && styles.font_600}`}
        >
          Like
        </span>
      </div>
      <div className={styles.actionbtn}>
        <img
          src={comment}
          alt="comments"
          className={` ${
            isEvent
              ? styles.action_buttonforevent_pic
              : styles.action_button_pic
          } `}
        />
        <span
          className={`${isEvent && styles.font_size_1} ${
            isEvent && styles.font_color_70
          } ${isEvent && styles.font_600}`}
        >
          Comments
        </span>
      </div>
    </div>
  );
}

export default ActionButtons;
