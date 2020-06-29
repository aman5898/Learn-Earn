import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUpcomingWebinars } from "../redux/actions/eventActions";
import PropTypes from "prop-types";
import styles from "../styles/App.scss";
import img_Aman from "../images/aman.jpg";
import AddEventComponent from "./AddEventComponent";

function UpcomingWebinar({ events, loadUpcomingWebinars }) {
  useEffect(() => {
    console.log(events);

    loadUpcomingWebinars();
  }, []);
  return (
    <div className={`offset-1 row ${styles.card}`}>
      <div className="col">
        <div className="row p-2 mb-2">
          <div className={`col ${styles.card_title}`}>
            <img
              className={styles.icon_size}
              src="https://img.icons8.com/pastel-glyph/64/000000/system-task.png"
            />
            &nbsp; Upcoming Webinars
          </div>
        </div>
        <div className={`row p-2`}>
          <div className="col-4">
            <img src={img_Aman} className={styles.img} />
          </div>
          <div className={`col-7 ${styles.font_color_70}`}>
            <div className={`row ${styles.card_title}`}>Python 101</div>
            <div className="row">Mentor - Aman Kumar</div>
            <div className="row">Date - 26/06/2020</div>
            <div className="row">Time - 20:00</div>
          </div>
          <div className="col"></div>
        </div>

        <div className={`row p-2`}>
          <div className="col-4">
            <img src={img_Aman} className={styles.img} />
          </div>
          <div className={`col-7 ${styles.font_color_70}`}>
            <div className={`row ${styles.card_title}`}>Python 101</div>
            <div className="row">Mentor - Aman Kumar</div>
            <div className="row">Date - 26/06/2020</div>
            <div className="row">Time - 20:00</div>
          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          {/* <AddEventComponent /> */}
        </div>
      </div>
    </div>
  );
}

UpcomingWebinar.propTypes = {
  events: PropTypes.array.isRequired,
  loadUpcomingWebinars: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

const mapDispatchToProps = {
  loadUpcomingWebinars,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingWebinar);
