import React from "react";
import styles from "../../styles/App.scss";
import img_Aman from "../../temp/image.jpg";

function UpcomingWebinarInfo() {
  return (
    <div className={`row p-2`}>
      <div className="col-3">
        <img src={img_Aman} className={styles.upcoming_webinar_img} />
      </div>
      <div className={`col-9 ${styles.font_color_70} ${styles.font_normal}`}>
        <div className={`row ${styles.card_title}`}>Python 101</div>
        <div className="row">Mentor - Aman Kumar</div>
        <div className="row">Date - 26/06/2020</div>
        <div className="row">Time - 20:00</div>
      </div>
    </div>
  );
}

UpcomingWebinarInfo.propTypes = {};

export default UpcomingWebinarInfo;
