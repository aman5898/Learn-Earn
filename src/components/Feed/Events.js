import React from "react";
import styles from "../../styles/App.scss";
import ActionButtons from "./ActionButtons";
import UserStamp from "../UserStamp";

function Events() {
  return (
    <div className="row mt-3">
      <div className="col-4">
        <UserStamp />
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col">
            <div className="row">
              <span
                className={`${styles.font_bold} ${styles.font_color_70} ${styles.font_size_9}`}
              >
                Scheduled At-
              </span>

              <span className={`${styles.font_color_70} ${styles.font_size_9}`}>
                &nbsp; 28 June 2020 @ 16:00 hrs
              </span>
            </div>
            <div className="row">
              <p className={styles.margin_bottom0}>
                <span
                  className={`${styles.font_bold} ${styles.font_color_70} ${styles.font_size_9}`}
                >
                  Description-
                </span>
                <span
                  className={`${styles.font_color_70} ${styles.font_size_9}`}
                >
                  &nbsp; Lorem Ipsum dolor sit amet, consectetur adipiscing...
                  <a href="www.xyz.con">Read more.</a>
                </span>
              </p>

             
            </div>
            <div className="row">
              <span className={`${styles.font_color_70} ${styles.font_size_1}`}>
                <b>69</b> interested, <b>250</b> likes and <b>35</b> comments
              </span>
            </div>
            <div className="row">
              <div className="col">
                <ActionButtons isEvent={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}

Events.propTypes = {};

export default Events;
