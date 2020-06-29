import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUpcomingWebinars } from "../redux/actions/eventActions";
import PropTypes from "prop-types";
import styles from "../styles/App.scss";
import img_Aman from "../temp/aman.jpg";

function UpcomingWebinar({ events, loadUpcomingWebinars }) {
  useEffect(() => {
    console.log(events);

    loadUpcomingWebinars();
  }, []);
  return (
    <div>
      
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
