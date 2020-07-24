import React from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";

function AddEventComponent({ onClick, userInfo }) {
  return (
    <div
      className={`${styles.bold} ${styles.add_event_button} ${styles.cursor_pointer} mb-2 col`}
      onClick={onClick}
    >
      <div className={`row`}>
        <div className={`col-2 ${styles.padding0}`}>
          <img
            src={userInfo.avatar}
            className={`${styles.add_event_button_image}`}
          />
        </div>
        <div className={`col ${styles.text_centre_addbtn}`}>
          + ADD EVENT FOR THIS REQUEST
        </div>
      </div>
    </div>
  );
}

AddEventComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddEventComponent;
