import React from "react";
import {Card} from 'react-bootstrap'; 
import styles from "../styles/App.scss";
import UserStamp from './UserStamp'
import classNames from 'classnames'


function YourRequests(){
    var info = {
        name:"Bittoo Aggarwal",
        discription : "how to kickstart your journey on path to crack product based company",
        date : "10/10/2020",
        time : "12 pm"
    }
    const cns = classNames(styles.font_color_70,styles.font_size_9)
    return(
        <Card style={{margin : "1.25rem",textAlign:"center"}} className = {styles.card}>
            <Card.Body>
            <Card.Title className={styles.card_title} style={{textAlign:"left"}}>
                Your Requests
                </Card.Title>
            <Card style={{border:"hidden"}}>
                <UserStamp />
                {/* Px to rem */}
                <Card.Body className = {cns} style={{padding:"1px",textAlign:"left"}}>
                <p>
                    <strong>{info.name}</strong> 
                    has added an event to your request
                    <strong>``{info.discription}``</strong>
                    <br />
                    <strong>Scheduled at - </strong><br /> 
                    {info.date} @{info.time}
                    </p>
                </Card.Body>
            </Card>

            </Card.Body>
        </Card>
    );
}

export default YourRequests;