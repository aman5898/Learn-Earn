import React from "react";
import {Card} from 'react-bootstrap'; 
import styles from "../styles/App.scss";
import UserStamp from './UserStamp'
import classNames from 'classnames'
import image from "../temp/image.jpg";


function YourRequests(){
    var info = {
        name:"Bittoo Aggarwal",
        discription : "how to kickstart your journey on path to crack product based company",
        date : "10/10/2020",
        time : "12 pm"
    }
    const maincardcns = classNames(styles.yourrequest_main_card,styles.card)
    const cns = classNames(styles.font_color_70,styles.font_size_9,styles.yourrequest_inner_card)
    //const cns_title = classNames(styles.card_title , styles.yourrequest_title)
    return(
        <Card className = {maincardcns}>
            <Card.Body>
            <Card.Title className={styles.card_title && styles.yourrequest_title} >
                <ion-icon name="receipt-outline"/>
                Your Requests
            </Card.Title>
            <Card className={styles.hidden_border}>
                <UserStamp stampinfo= {{"image":image, "name":"xyzzz","rating":"3.0"}} />
                {/* Px to rem */}
                <Card.Body className = {cns} >
                <p>
                    <strong>{info.name} </strong> 
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