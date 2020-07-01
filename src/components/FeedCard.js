import React, { useState } from "react";
import FeedProfileInfo from "./FeedProfileInfo";
import InterestedUsers from "./InterestedUsers";
import InformationButton from "./InformationButton";
import FeedInfo from "./FeedInfo";
import styles from "../styles/App.scss";
import AddEventComponent from "../components/AddEventComponent";
import AddEventComponentExtended from "../components/AddEventComponentExtended";
import UserStamp from "./UserStamp";
import ActionButtonsforEvent from "./ActionButtonsforEvent";

function FeedCard() {
  const [clicked, setClicked] = useState(true);

  function clickFunction() {
    setClicked(!clicked);
  }
  return (
    <div className={`${styles.feedcard} mb-5`}>
      <InformationButton />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <FeedProfileInfo />
          </div>
          <InterestedUsers />
        </div>
        <div className="row">{/* Tags come here */}</div>
        <div className="row">
          <FeedInfo />
        </div>

        <div className="row mt-3">
          <div className="col"></div>
          <div className="col-10">
            {clicked ? (
              <AddEventComponent onClick={clickFunction} />
            ) : (
              <AddEventComponentExtended onClick={clickFunction} />
            )}
          </div>
          <div className="col"></div>
        </div>

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

                  <span
                    className={`${styles.font_color_70} ${styles.font_size_9} ${styles.font_500}`}
                  >
                    &nbsp; 28 June 2020 @ 16:00 hrs
                  </span>
                </div>
                <div className="row">
                  <span>
                    <span
                      className={`${styles.font_bold} ${styles.font_color_70} ${styles.font_size_9}`}
                    >
                      Description-
                    </span>
                    <span
                      className={`${styles.font_color_70} ${styles.font_size_9} ${styles.font_500}`}
                    >
                      &nbsp; Lorem Ipsum dolor sit amet, consectetur adipiscing...
                      <a href="www.xyz.con">Read more.</a>
                    </span>
                  </span>
                </div>
                <div className="row">
                  <span
                    className={`${styles.font_color_70} ${styles.font_size_1} ${styles.font_500}`}
                  >
                    69 interested, 250 likes and 35 comments
                  </span>
                </div>
                <div className="row">
                  <div className="col">
                    <ActionButtonsforEvent />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
