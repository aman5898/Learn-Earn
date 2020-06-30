import React from "react";
import styles from "../styles/App.scss";
import img_Aman from "../images/aman.jpg";

function AddEventComponent() {
  return (
    <div className={`${styles.bold} ${styles.add_event_button}`}>
      <img src={img_Aman} className={styles.img_2} /> AddEvent Component
    </div>
  );
}

export default AddEventComponent;
