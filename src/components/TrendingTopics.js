import React from "react";
import classNames from 'classnames'
import {Card} from 'react-bootstrap'; 

import styles from "../styles/App.scss";
import { faBell,faCommentAlt } from "@fortawesome/free-solid-svg-icons";
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
            return (
            <Card.Body>
                <Card.Title style={{marginBottom:'0rem'}}>
            {idx+1}. {obj.topic}
                </Card.Title>
                <Card.Text style = {{paddingLeft:"20px"}}>
                    {obj.interesed} interested
                </Card.Text>
            </Card.Body>
        )
    }
    var cardItem = trendingList.map(cardrender);

    return(
        <Card style={{margin : "1.25rem"}}>
            <Card.Body>
                <Card.Title>
                    Trending Topics
                </Card.Title>
                {cardItem}
            </Card.Body>
        </Card>
    );
}

export default TrendingTopics;