import React, {useEffect, useContext} from "react";
import styles from "../../styles/App.scss";
import image from "../../temp/image.jpg";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import API from "../../api/api";

function InterestedUsers({interested}){

    useEffect(() => {
        const fetchUser = async () => {
            const cookies = new Cookies();
            const header = cookies.get("x-auth-cookie");
            var imageArr = [];
            console.log("Post:" + interested);
            for(var i = 0; i < 3 && i < interested.length; i++){
                let { response, success } = await API('GET', `user/${interested[i]}`, {}, header);
                if(success && typeof response.avatar != "undefined") {
                    imageArr.push(response.avatar);
                }
            }

            console.log(imageArr);
        }
        fetchUser();
    },[]);

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
                    {interested.length} others
                    </div>
                </div>
            </div>
        </div>    
    );
}

InterestedUsers.propTypes = {
    interested: PropTypes.object
}

export default InterestedUsers;