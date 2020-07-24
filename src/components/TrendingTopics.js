import React from "react";
import classNames from 'classnames'
import {Card} from 'react-bootstrap'; 

import styles from "../styles/App.scss";

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
        var cn = classNames(styles.font_size_1,styles.trend_card_interesed_style)
            // Key in card body
            
            return (
            <Card.Body key={idx} className={styles.trend_card_padding}>
                <Card.Title  className={styles.card_title} style={{marginBottom:"0px"}}>
            {idx+1}. {obj.topic}
                </Card.Title>
                <Card.Text className = {cn}>
                    {obj.interesed} interested
                </Card.Text>
            </Card.Body>
        )
    }
    var cardItem = trendingList.map(cardrender);
    let cns = classNames(styles.card,styles.trend_main_card)

    return(
        <Card className={cns} >
            <Card.Body >
                <Card.Title className={styles.card_title} >
                    <ion-icon name="pulse"/> Trending Topics
                </Card.Title>
                {cardItem}
            </Card.Body>
        </Card>
    );
}

export default TrendingTopics;