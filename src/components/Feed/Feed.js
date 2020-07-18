import React, { useState, useEffect } from "react";
import FeedCard from './FeedCard'
import Cookies from 'universal-cookie';
import API from '../../api/api';

const FEED_LIMIT = 5;

function Feed(){

    const [feeds, setFeeds] = useState([]);
    const [counter, setCounter] = useState(0);
    const [hideViewBtn, setHideViewBtn] = useState(false);

    const cookies = new Cookies();
    const header = cookies.get("x-auth-cookie");

    useEffect(() => {
        const fetchFeeds = async () => {
            const { response, success } = await API('GET', `/feed?skip=${counter}&count=${FEED_LIMIT}`, {}, header);
            if(success){
                setFeeds(response == null ? [] : response);
            }
        };
        fetchFeeds();
    }, []);

    const getMoreFeed = async (e) => {
        e.preventDefault();
        const { response, success } = await API('GET', `/feed?skip=${counter + FEED_LIMIT}&count=${FEED_LIMIT}`, {}, header);
        if(success) {
            setFeeds(prevFeeds => [...prevFeeds, ...response]);
            setCounter(prevCounter => prevCounter + FEED_LIMIT);
            setHideViewBtn(response.length < FEED_LIMIT);
        }
    }

    return(
        <>
            {feeds.map((feed, idx) => <FeedCard  key={idx} feed={feed}/>)}
            {(hideViewBtn) ? null : <button 
                type="button" 
                className="btn btn-outline-primary" 
                style={{marginLeft: "auto", marginRight: "auto"}}  
                onClick={getMoreFeed}
            >
                Load More <ion-icon name="caret-down"></ion-icon>
            </button>}
        </>
    );
}

export default Feed;