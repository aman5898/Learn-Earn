import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUpcomingWebinars } from "../redux/actions/eventActions";
import PropTypes from "prop-types";
import styles from "../styles/App.scss";
import UpcomingWebinarInfo from "./UpcomingWebinarInfo";

function UpcomingWebinarCard({ events, loadUpcomingWebinars }) {
  useEffect(() => {
    console.log(events);

    loadUpcomingWebinars();
  }, []);
  return (
    <div className="row mt-4">
      {/* <div className="col"></div> */}
      <div className="col">
        <div className={`row ${styles.card}`}>
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
            <UpcomingWebinarInfo />
            <UpcomingWebinarInfo />
            <UpcomingWebinarInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

UpcomingWebinarCard.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingWebinarCard);
