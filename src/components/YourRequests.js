import React from "react";
import {Card,Image} from 'react-bootstrap'; 
import styles from "../styles/App.scss";
import UserStamp from './UserStamp'

function YourRequests(){
    return(
        <Card style={{margin : "1.25rem",textAlign:"center"}} className = {styles.card}>
            <Card.Body>
            <Card.Title>Your Requests</Card.Title>
            <Card>
                <UserStamp />
            </Card>

            </Card.Body>
        </Card>
    );
}

export default YourRequests;