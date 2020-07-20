import React, {useState} from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";

function ActionButtons({ isEvent, eventId, displayFeedComments, displayEventComments }) {

  const [likeActive, setLike] = useState(false);
  const [interestedActive, setInterested] = useState(false);

  const like_req_evn = async (e) => {
    e.preventDefault();
    setLike(!likeActive);

    // const type = (isEvent) ? 'evn' : 'req';

    // const payload = {
    //   "text": newComment,
    //   [type_key]: type_id,
    //   "referenced_to": (Object.keys(referenced).length === 0) ? null : referenced._id 
    // }

    // const { response, success } = await API('PATCH', `like/${type}`, payload, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxMmgiLCJpZCI6IjVlZTc0ZjI3OTRlMjhkOGI3NmY5YjI1NSIsImVtYWlsIjoic2F2aXRvamphc3dhbEBnbWFpbC5jb20iLCJpYXQiOjE1OTQ2OTkxMTh9.bwVGfkuE6ThlimxRrQx2lhEiPJvvjbWRdXtOK7iXAsE');
    
    // if(success) {

    // }
  }

  const showComments = () => {
    if(!isEvent) displayFeedComments(true); 
    else displayEventComments(true, eventId);
  }

  return (
    <div className={`row ${isEvent && styles.margin_left_negative_1point7}`}>
      <div className={`${styles.actionbtn} ${styles.cursor_pointer} ${interestedActive && styles.interest_active}`}  onClick={ () => setInterested(!interestedActive)}>
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
