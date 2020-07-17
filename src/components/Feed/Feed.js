import React from "react";
import FeedCard from './FeedCard'

function Feed({userInfo}){
    return(
        <FeedCard userInfo={userInfo}/>
    );
}

export default Feed;