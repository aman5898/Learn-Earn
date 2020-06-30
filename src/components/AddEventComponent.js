import React from "react";
import styles from "../styles/App.scss";
import img_Aman from "../temp/aman.jpg";
import PropTypes from "prop-types";

function AddEventComponent({ onClick }) {
  return (
    <div
      className={`${styles.bold} ${styles.add_event_button} ${styles.cursor_pointer} mb-4`}
      onClick={onClick}
    >
      <img src={img_Aman} className={styles.add_event_button_image} /> &nbsp;
      &nbsp; + ADD EVENT FOR THIS REQUEST
    </div>
  );
}

AddEventComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddEventComponent;
