import React, { useState, useEffect } from "react";
import FeedCard from './FeedCard'
import Cookies from 'universal-cookie';
import API from '../../api/api';

const FEED_LIMIT = 20;

function Feed(){

    const [feeds, setFeeds] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const fetchFeeds = async () => {
            const cookies = new Cookies();
            const header = cookies.get("x-auth-cookie");
            const { response, success } = await API('GET', `/feed?skip=${counter}&count=${FEED_LIMIT}`, {}, header);
            if(success){
                setFeeds(response == null ? [] : response);
            }
        };
        fetchFeeds();
    }, []);

    return(
        <>
        {feeds.map((feed, idx) => <FeedCard  key={idx} feed={feed}/>)}
        </>
    );
}

export default Feed;