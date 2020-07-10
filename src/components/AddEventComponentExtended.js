import React, { useState } from "react";
import styles from "../styles/App.scss";
import img_Aman from "../temp/image.jpg";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Test from "./Test";

class CustomInputDatePicker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        className={`${styles.background_blue} ${styles.font_white} ${styles.cursor_pointer} ${styles.placeholder_white}`}
        onClick={this.props.onClick}
        placeholder={this.props.defaultText}
        defaultValue={this.props.value}
      />
    );
  }
}

function AddEventComponentExtended({ onClick }) {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);

  return (
    <div className={`${styles.add_event_card} container mb-4`}>
      <div className="row">
        <img src={img_Aman} className={styles.add_event_card_image} />
      </div>
      <div className="row ml-3 mr-3 mb-2">
        <div className={`col ${styles.bottom_border_white}`}>
          <DatePicker
            showPopperArrow={false}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<CustomInputDatePicker defaultText="Add Date" />}
          />
        </div>
        <div className="col"></div>
        <div className={`col ${styles.bottom_border_white}`}>
          <DatePicker
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            customInput={<CustomInputDatePicker defaultText="Add Time" />}
          />
        </div>
      </div>
      <div className="row ml-3 mr-3 mb-2">
        {/* Textarea input */}
        <div className={`col ${styles.bottom_border_white}`}>
          <textarea
            placeholder="Write Description"
            rows={1}
            className={`${styles.cursor_pointer} ${styles.background_inherit} ${styles.placeholder_white} ${styles.font_normal} ${styles.width_inherit} ${styles.border_none} ${styles.font_white}`}
          />
        </div>
      </div>
      <div className="row ml-3 mr-3 mb-2">
        <div className={`col ${styles.bottom_border_white}`}>
          <input
            placeholder="Paste Class Link"
            className={`${styles.cursor_pointer} ${styles.background_inherit} ${styles.placeholder_white} ${styles.font_normal} ${styles.width_inherit} ${styles.border_none} ${styles.font_white}`}
          />
        </div>
      </div>
      <div
        className={`row ml-3 mr-3 pb-3 mt-3 ${styles.text_centre} ${styles.fw_700}`}
      >
        <div className={`col ${styles.cursor_pointer}`} onClick={onClick}>
          + ADD EVENT FOR THIS REQUEST
        </div>
      </div>
    </div>
  );
}

CustomInputDatePicker.propTypes = {
  onClick: PropTypes.func,
  defaultText: PropTypes.string.isRequired,
  value: PropTypes.string,
};

AddEventComponentExtended.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddEventComponentExtended;
