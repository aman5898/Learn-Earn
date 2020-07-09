import React from "react";
import classNames from 'classnames'
import {Card} from 'react-bootstrap'; 

import styles from "../styles/App.scss";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auto } from "async";
import image from "../temp/image.jpg"

function TrendingTopics(){

    var trendingList = [{
        "topic" : "Abcde",
        "interesed" : "24k"
    },{
        "topic" : "Abcde",
        "interesed" : "24k"
    },{
        "topic" : "Abcde",
        "interesed" : "24k"
    },{
        "topic" : "Abcde",
        "interesed" : "24k"
    }]
    
    function cardrender(obj,idx){
        var cn = classNames(styles.font_size_1)

            return (
            <Card.Body style={{padding:"0.0625rem "}}>
                <Card.Title className={styles.card_title} style={{margin:"0.125rem"}}>
            {idx+1}. {obj.topic}
                </Card.Title>
                <Card.Text className = {cn} style = {{font:'Regular Segoe UI',paddingLeft:"1.25rem",paddingBottom:
            "0.9375rem"}}>
                    {obj.interesed} interested
                </Card.Text>
            </Card.Body>
        )
    }
    var cardItem = trendingList.map(cardrender);

    return(
        <Card className={styles.card} style={{margin : "1.25rem",width:"100%"}}>
            <Card.Body >
                <Card.Title className={styles.card_title}>
                   <FontAwesomeIcon icon={faFireAlt}/> Trending Topics
                </Card.Title>
                {cardItem}
            </Card.Body>
        </Card>
    );
}

export default TrendingTopics;