import React from "react";
import like from "../temp/like.png";
import interested from "../temp/interested.png";
import comment from "../temp/comment.png";
import styles from "../styles/App.scss";
import PropTypes from "prop-types";

function ActionButtons({ isEvent }) {
  return (
    // Cursor: pointer
    <div className={`row ${isEvent && styles.margin_left_negative_1point7}`}>
      <div className={`${styles.actionbtn} ${styles.cursor_pointer}`}>
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
      <div className={`${styles.actionbtn} ${styles.cursor_pointer}`}>
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
      <div className={`${styles.actionbtn} ${styles.cursor_pointer}`}>
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

ActionButtons.propTypes = {
  isEvent: PropTypes.bool.isRequired,
};

export default ActionButtons;
