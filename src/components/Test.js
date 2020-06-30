import React from "react";
import styles from "../styles/App.scss";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        className={`${styles.background_blue} ${styles.font_white} ${styles.cursor_pointer}`}
        onClick={this.props.onClick}
        onChange={this.props.onClick}
        placeholder="Add Time"
        value={this.props.value}
      />
    );
  }
}

export default Test;
