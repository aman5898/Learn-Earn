import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import API from "../../api/api";
import styles from "../../styles/App.scss";
import Comment from "./Comment";
import ReferencedChip from "./ReferencedChip";
import Cookies from 'universal-cookie';

const COMMENTS_LIMIT = 5;

function Comments({ type, type_id }) {

    const [newComment, setNewComment] = useState('');
    const [hideViewBtn, setHideViewBtn] = useState(false);
    const [comments, setComments] = useState([]);
    const [counter, setCounter] = useState(0);
    const [referenced, setReferenced] = useState({});

    useEffect(() => {
        const fetchComments = async () => {
            const cookies = new Cookies();
            const header = cookies.get("x-auth-cookie");
            const { response, success } = await API('GET', `comments/${type}/${type_id}?skip=${counter}&count=${COMMENTS_LIMIT}`, {}, header);
            if(success) {
                setComments(response == null ? [] : response);
                setHideViewBtn(response.length < COMMENTS_LIMIT);
            }
        }; 
        fetchComments();
    }, []);

    const addNewComment = async () => {
        let type_key = `${type}_id`;
        const payload = {
            "text": newComment,
            [type_key]: type_id,
            "referenced_to": (Object.keys(referenced).length === 0) ? null : referenced._id 
        }
        const { response, success } = await API('POST', `comments/${type}`, payload, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxMmgiLCJpZCI6IjVlZTc0ZjI3OTRlMjhkOGI3NmY5YjI1NSIsImVtYWlsIjoic2F2aXRvamphc3dhbEBnbWFpbC5jb20iLCJpYXQiOjE1OTQ2OTkxMTh9.bwVGfkuE6ThlimxRrQx2lhEiPJvvjbWRdXtOK7iXAsE');
        if(success) {
            setNewComment('');
            setReferenced({});
            setComments(prevComments => [response.comment, ...prevComments]);
            setCounter(prevCounter => prevCounter + 1);
        }   
    }

    const replyHandler = (comment_creator) => {
        setReferenced(comment_creator)
    }

    const getMoreComments = async (e) => {
        e.preventDefault();
        const { response, success } = await API('GET', `comments/${type}/${type_id}?skip=${counter + COMMENTS_LIMIT}&count=${COMMENTS_LIMIT}`, {}, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxMmgiLCJpZCI6IjVlZTc0ZjI3OTRlMjhkOGI3NmY5YjI1NSIsImVtYWlsIjoic2F2aXRvamphc3dhbEBnbWFpbC5jb20iLCJpYXQiOjE1OTQ2OTkxMTh9.bwVGfkuE6ThlimxRrQx2lhEiPJvvjbWRdXtOK7iXAsE');
        if(success) {
            setComments(prevComments => [...prevComments, ...response]);
            setCounter(prevCounter => prevCounter + COMMENTS_LIMIT);
            setHideViewBtn(response.length < COMMENTS_LIMIT);
        }
    }

    const handleKeyDown = (e) => {
        // On Enter
        if(e.keyCode === 13) addNewComment();

        // On backspace and no comment entered
        if(e.keyCode === 8 && newComment === '') setReferenced({});
    }

    return (
        <div className={`${styles.comments_card} mb-5`}>
            {/* Comments Header */}
            <div className="container">
                <div className="row">
                    <div className={`${styles.comments_header} col`}>
                        <div className={styles.comments_btn}>
                            <ion-icon name="arrow-back-circle" />
                        </div>
                        <div className={styles.comments_heading} >
                            Comments
                        </div>
                    </div>
                </div>

                {/* List of comments */}
                <div className={styles.list_comments_container}>
                    {comments.map((comment, ind) => <Comment key={ind} comment={comment} replyHandler={replyHandler}/>)}

                    {(hideViewBtn) ? null : <div className={styles.view_more_container} onClick={getMoreComments}>
                        <div className={styles.view_more_btn}><ion-icon name="caret-down"></ion-icon>View More</div>
                    </div>}
                </div>

                {/* Add Comments */}
                <div className={`${styles.type_comment_container} row`}>
                    <div className={`col-10 ${styles.typing_container_flex}`}>
                        {Object.keys(referenced).length === 0 ? null : (
                            <div className={styles.referenced_container}>
                                <ReferencedChip referenced={referenced.name}/>
                            </div>
                        )}
                        <div className={styles.typing_container}>
                            <input 
                                placeholder="Start Typing..."
                                value={newComment}
                                className={styles.comment_input}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                    
                    <div className={`${styles.comments_btn__right} col-2`} onClick={addNewComment}>
                        <ion-icon name="paper-plane" size="large"></ion-icon>
                    </div>
                </div>   

            </div>
        </div>
    );
}

Comments.propTypes = {
    type: PropTypes.string,
    type_id: PropTypes.string
}

export default Comments;