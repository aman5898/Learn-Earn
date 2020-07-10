import React from "react";
import { Card, Image } from "react-bootstrap";
// import classNames from 'classNames'
import styles from "../styles/App.scss";
import image from "../temp/image.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserStamp() {
  // var classNames = classNames(style.userstamp_bg)
  return (
    <div style={{width:"fit-content",alignSelf:"center"}}>
      <Card.Body
        style={{ textAlign: "center", color: "white"}}
        className={styles.userstamp_bg} >
        <Image
          style={{ height: "3.25rem", border: "0.125rem solid #fff" }}
          src={image}
          alt="LearnAndEarn User"
          roundedCircle
          fluid
        />
        <Card.Subtitle className="mb-2 mt-1">Name Here</Card.Subtitle>
        <Card.Subtitle>5.0 <FontAwesomeIcon icon={faStar} /></Card.Subtitle>
      </Card.Body>
    </div>
  );
}

export default UserStamp;
