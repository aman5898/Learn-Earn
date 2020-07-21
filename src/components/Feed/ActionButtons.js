import React, {useState, useEffect} from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import API from "../../api/api";

function ActionButtons({ isEvent, eventId, requestId, likes_users, displayFeedComments, displayEventComments, userInfo, userLikeFunc, userInterestedFunc }) {

  const [likeActive, setLike] = useState(false);
  const [interestActive, setInterest] = useState(false);
  const [interestedActive, setInterested] = useState(false);
  const [userLiked, setUserLiked] = useState(false);
  const [userInterested, setUserInterested] = useState(false);
  const cookies = new Cookies();
  const header = cookies.get("x-auth-cookie");

  useEffect(() => {
    if(likes_users){
      if(likes_users.indexOf(userInfo._id) !== -1){
        setLike(true);
        setUserLiked(true);
      }
    }
  }, []);

  const like_req_evn = async (e) => {
    e.preventDefault();

    const type = (isEvent) ? 'evn' : 'req';
    const action = likeActive ? 'dislike' : 'like';
    const id = isEvent ? eventId : requestId;

    const payload = {
      "type": type,
      "action": action,
      "er_id": id 
    }

    const { response, success } = await API('PATCH', `like/`, payload, header);
    
    if(success) {
      setLike(!likeActive);
      userLikeFunc(userLiked, likeActive);
    }
  }

  const interested_req_evn = async (e) => {
    e.preventDefault();
    const type = (isEvent) ? 'evn' : 'req';
    const action = likeActive ? 'dislike' : 'like';
    const id = isEvent ? eventId : requestId;

    const payload = {
      "type": type,
      "action": action,
      "er_id": id 
    }

    const { response, success } = await API('PATCH', `interested/`, payload, header);
    
    if(success) {
      setInterested(!interestActive);
      userInterestedFunc(userInterested, interestActive);
    }
  }

  const showComments = () => {
    if(!isEvent) displayFeedComments(true); 
    else displayEventComments(true, eventId);
  }

  return (
    <div className={`row ${isEvent && styles.margin_left_negative_1point7}`}>
      <div className={`${styles.actionbtn} ${styles.cursor_pointer} ${interestedActive && styles.interest_active}`}  onClick={ interested_req_evn }>
        <ion-icon name="add-circle" />
        <span
          className={`${isEvent && styles.font_size_1} ${
            isEvent && styles.font_color_70
          } ${isEvent && styles.font_600}`}
        >
          Interested
        </span>
      </div>
      <div className={`${styles.actionbtn} ${styles.cursor_pointer} ${likeActive && styles.like_active}`} onClick={like_req_evn}>
      <ion-icon name="heart" />
        <span
          className={`${isEvent && styles.font_size_1} ${
            isEvent && styles.font_color_70
          } ${isEvent && styles.font_600}`}
        >
          Like
        </span>
      </div>
      <div className={`${styles.actionbtn} ${styles.cursor_pointer}`} onClick={showComments}>
        <ion-icon name="chatbox-ellipses" />
        <span
          className={`${isEvent && styles.font_size_1} ${
            isEvent && styles.font_color_70
          } ${isEvent && styles.font_600}`}
        >
          Comments
        </span>
      </div>
    </div>
  );
}

ActionButtons.propTypes = {
  isEvent: PropTypes.bool.isRequired,
  eventId: PropTypes.string,
  displayFeedComments: PropTypes.func,
  displayEventComments: PropTypes.func,
};

export default ActionButtons;
