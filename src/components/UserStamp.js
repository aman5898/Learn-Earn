import React from "react";
import {Card,Image} from 'react-bootstrap'; 
// import classNames from 'classNames'
import styles from "../styles/App.scss";
import image from "../temp/image.jpg";

function UserStamp(){
    // var classNames = classNames(style.userstamp_bg)
    return(
        <Card style={styles.add}>
            <Card.Body style={{textAlign:"center",color:"white"}} className = {styles.userstamp_bg}>
                <Image style={{height:"70px",width:"70px",border:"0.125rem solid #fff"}} src={image} alt="LearnAndEarn User" roundedCircle fluid />
                <Card.Title>Name here</Card.Title>
                <Card.Subtitle>Rating 5.0</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}

export default UserStamp;