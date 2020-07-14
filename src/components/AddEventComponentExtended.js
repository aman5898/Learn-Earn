import React from "react";
import styles from "../styles/App.scss";
import img_Aman from "../temp/aman.jpg";

function AddEventComponentExtended() {
  return (
    <div className={`${styles.add_event_card} container mb-4`}>
      <div className="row">
        <img src={img_Aman} className={styles.add_event_card_image} />
      </div>
      <div className="row ml-3 mr-3 mb-2">
        <div className={`col ${styles.bottom_border_white}`}>Add Date</div>
        <div className="col"></div>
        <div className={`col ${styles.bottom_border_white}`}>Add Time</div>
      </div>
      <div className="row ml-3 mr-3 mb-2">
        <div className={`col ${styles.bottom_border_white}`}>
          Write Description
        </div>
      </div>
      <div className="row ml-3 mr-3 mb-2">
        <div className={`col ${styles.bottom_border_white}`}>
          Paste Class Link
        </div>
      </div>
      <div className={`row ml-3 mr-3 pb-3 mt-3 ${styles.text_centre} ${styles.fw_700}`}>
        <div className={`col`}>+ ADD EVENT FOR THIS REQUEST</div>
      </div>
    </div>
  );
}

export default AddEventComponentExtended;
