import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/App.scss";
import UpcomingWebinarInfo from "./UpcomingWebinarInfo";

function UpcomingWebinarCard() {
  useEffect(() => {}, []);
  return (
    <div className="row mt-4">
      {/* <div className="col"></div> */}
      <div className="col">
        <div className={`row ${styles.card}`}>
          <div className="col">
            <div className="row p-2 mb-2">
              <div className={`col ${styles.card_title}`}>
                <ion-icon name="calendar-outline" />
                &nbsp; Upcoming Webinars
              </div>
            </div>
            <UpcomingWebinarInfo />
            <UpcomingWebinarInfo />
            <UpcomingWebinarInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

UpcomingWebinarCard.propTypes = {};

export default UpcomingWebinarCard;
