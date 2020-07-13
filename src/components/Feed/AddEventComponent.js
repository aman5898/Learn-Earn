import React from "react";
import styles from "../../styles/App.scss";
import img_Aman from "../../temp/image.jpg";
import PropTypes from "prop-types";

function AddEventComponent({ onClick }) {
 
  return (
    <div
      className={`${styles.bold} ${styles.add_event_button} ${styles.cursor_pointer} mb-4`}
      onClick={onClick}
    >
      <div className={styles.img_container}>
        <div className="row">
          <div className="col-2">
            <img src={img_Aman} className={styles.add_event_button_image} />
          </div>
          <div className={`col ${styles.text_centre_addbtn}`}>
            + ADD EVENT FOR THIS REQUEST
          </div>
        </div>
      </div>
    </div>
  );
}

AddEventComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddEventComponent;
