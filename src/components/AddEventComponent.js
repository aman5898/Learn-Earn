import React from "react";
import styles from "../styles/App.scss";
import img_Aman from "../temp/aman.jpg";

function AddEventComponent() {
  return (
    <div className={`${styles.bold} ${styles.add_event_button} mb-4`}>
      <img src={img_Aman} className={styles.add_event_button_image} /> &nbsp; &nbsp; + ADD EVENT FOR THIS
      REQUEST
    </div>
  );
}

export default AddEventComponent;
