import React from "react";
import styles from "../../styles/App.scss";
import image from "../../temp/image.jpg";
import PropTypes from "prop-types";

function InterestedUsers({interested}){
    return(
        <div className="row">
            <div className="col">
                <div className={styles.plus_symbol}>
                    +
                </div>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className={styles.int_images}>
                         <img src={image} alt="interested users" className={styles.intUser_pic} />
                         <img src={image} alt="interested users" className={styles.intUser_pic && styles.pic_two} />
                         <img src={image} alt="interested users" className={styles.intUser_pic && styles.pic_three} />
                    </div>
                </div>
                <div className="row">
                    <div className={styles.interested_count}>
                    {interested} others
                    </div>
                </div>
            </div>
        </div>    
    );
}

InterestedUsers.propTypes = {
    interested: PropTypes.number
}

export default InterestedUsers;