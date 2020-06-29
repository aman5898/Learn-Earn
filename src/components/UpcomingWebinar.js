import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUpcomingWebinars } from "../redux/actions/eventActions";
import PropTypes from "prop-types";

function UpcomingWebinar({ events, loadUpcomingWebinars }) {
  useEffect(() => {
    loadUpcomingWebinars();
  }, []);
  return (
    <div>
      UpcomingWebinar Component
      {events}
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

export default connect(mapStateToProps,mapDispatchToProps)(UpcomingWebinar);
