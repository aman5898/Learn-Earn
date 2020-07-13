import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/App.scss";

function FeedTags({ tags }) {

    return (
        <div className={styles.feed_tag_container}>
            <span className={styles.tags_heading}>Tags &#8722;</span>
            <span className={styles.tags_container}>
                {(tags.length > 0) ? (
                    tags.map((tag, index) => (
                        <div className={styles.feed_tag_item} key={index}>
                            {tag.tag_name}
                        </div>
                    ))
                ) : (
                    <>Oops! no tags found</>
                )}
                
            </span>
        </div>
    ); 
}
 
FeedTags.propTypes = {
    tags: PropTypes.array.isRequired
};

export default FeedTags;