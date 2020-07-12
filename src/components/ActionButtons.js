import React from "react";
import styles from "../styles/App.scss";
import PropTypes from "prop-types";

function ActionButtons({ isEvent }) {
  return (
    // Cursor: pointer
    <div className={`row ${isEvent && styles.margin_left_negative_1point7}`}>
      <div className={`${styles.actionbtn} ${styles.cursor_pointer}`}>
        <ion-icon name="add-circle" />
        <span
          className={`${isEvent && styles.font_size_1} ${
            isEvent && styles.font_color_70
          } ${isEvent && styles.font_600}`}
        >
          Interested
        </span>
      </div>
      <div className={`${styles.actionbtn} ${styles.cursor_pointer}`}>
      <ion-icon name="heart" />
        <span
          className={`${isEvent && styles.font_size_1} ${
            isEvent && styles.font_color_70
          } ${isEvent && styles.font_600}`}
        >
          Like
        </span>
      </div>
      <div className={`${styles.actionbtn} ${styles.cursor_pointer}`}>
        <ion-icon name="chatbox-ellipses" />
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
