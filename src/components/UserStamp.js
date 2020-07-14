import React from "react";
import { Card, Image } from "react-bootstrap";
import styles from "../styles/App.scss";
import image from "../temp/image.jpg";

function UserStamp() {
  // var classNames = classNames(style.userstamp_bg)

  function random_color(){
    let arr = [["#870000","#190A05"],["#24C6DC","#514A9D"],["#3CA55C","#B5AC49"],["#348F50","#56B4D3"],["#b92b27","#1565C0"],["#f12711","#f5af19"],["#8360c3","#2ebf91"],["#F3904F","#3B4371"],["#3a6186","#89253e"]];
    return arr[Math.floor(Math.random()*(7))];
  }

  let colors = random_color();

  return (
    <div style={{width:"fit-content",alignSelf:"center"}}>
      <Card.Body
        style={{ backgroundImage: `linear-gradient(${colors[0]}, ${colors[1]})` }}
        className={styles.userstamp_style} >
        <Image
          className={styles.userstamp_image}
          src={image}
          alt="LearnAndEarn User"
          roundedCircle
          fluid
        />
        <Card.Subtitle className="mb-2 mt-1">Name Here</Card.Subtitle>
        <Card.Subtitle>5.0 <ion-icon name="star" style={{ fontSize: `1rem`}}/></Card.Subtitle>
      </Card.Body>
    </div>
  );
}

export default UserStamp;
