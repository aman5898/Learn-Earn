import React from "react";
import styles from "../../styles/App.scss";
import img_Aman from "../../temp/image.jpg";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import autosize from "autosize";
import API from "../../api/api";

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
        value={this.props.value}
        onChange={this.props.onClick}
      />
    );
  }
}

class AddEventComponentExtended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      startTime: null,
      description: null,
      classLink: null,
    };
  }

  componentDidMount() {
    this.textarea.focus();
    autosize(this.textarea);
  }

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleTimeChange = (time) => {
    this.setState({
      startTime: time,
    });
  };

  createEventFunc = async () => {
    const payload = {
      description: this.state.description,
      class_link: this.state.classLink,
      event_datetime: "2345",
      request: "5ee76024d17a0f2069bf1ddb",
      title: this.state.description,
      recording_link: "234",
      tags: "[]",
      prerequisites: "[]",
    };

    let { response, success } = await API(
      "POST",
      "/event/create",
      payload,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxMmgiLCJpZCI6IjVlZTVlOGI2ODBkODMwMjA4OGE1Nzc2OCIsImVtYWlsIjoiYW1hbmtyc2luZ2guMjAxMkBnbWFpbC5jb20iLCJpYXQiOjE1OTUwNjY5MDV9.sU1Z3DZjqh2zs9OkBj3jsWqXxibbXf4gg8-Gx5KoBpY"
    );

    if (success) {
      alert("Event Has Been Created");
      console.log(response);
    } else {
      alert("Unable to Create Event");
    }
  };

  handleChange = () => {
    console.log("Aman");
  };

  render() {
    return (
      <div className={`${styles.add_event_card} container mb-4`}>
        <div className="row">
          <img src={img_Aman} className={styles.add_event_card_image} />
        </div>
        <div className="row ml-3 mr-3 mb-2">
          <div className={`col ${styles.bottom_border_white}`}>
            <DatePicker
              showPopperArrow={false}
              selected={this.state.startDate}
              onChange={this.handleDateChange}
              customInput={<CustomInputDatePicker defaultText="Add Date" />}
            />
          </div>
          <div className="col"></div>
          <div className={`col ${styles.bottom_border_white}`}>
            <DatePicker
              selected={this.state.startTime}
              onChange={this.handleTimeChange}
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
              ref={(c) => (this.textarea = c)}
              onChange={(e) => {
                this.setState({
                  description: e.target.value,
                });
              }}
              className={`${styles.cursor_pointer} ${styles.background_inherit} ${styles.placeholder_white} ${styles.font_normal} ${styles.width_inherit} ${styles.border_none} ${styles.font_white}`}
            />
          </div>
        </div>
        <div className="row ml-3 mr-3 mb-2">
          <div className={`col ${styles.bottom_border_white}`}>
            <input
              placeholder="Paste Class Link"
              className={`${styles.cursor_pointer} ${styles.background_inherit} ${styles.placeholder_white} ${styles.font_normal} ${styles.width_inherit} ${styles.border_none} ${styles.font_white}`}
              onChange={(e) => {
                this.setState({
                  classLink: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div
          className={`row ml-3 mr-3 pb-3 mt-3 ${styles.text_centre} ${styles.fw_700}`}
        >
          <div
            className={`col ${styles.cursor_pointer}`}
            onClick={this.createEventFunc}
          >
            + ADD EVENT FOR THIS REQUEST
          </div>
        </div>
      </div>
    );
  }
}

CustomInputDatePicker.propTypes = {
  onClick: PropTypes.func,
  defaultText: PropTypes.string.isRequired,
  value: PropTypes.string,
};

AddEventComponentExtended.propTypes = {
  createEventFunc: PropTypes.func,
};

export default AddEventComponentExtended;
