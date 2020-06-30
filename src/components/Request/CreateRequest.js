import React, { useState } from "react";
import styles from "../../styles/App.scss";
import image from "../../temp/image.jpg";
import { InputGroup, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AddRequestDetails from "./AddRequestDetails";

function CreateRequest(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [validity, setValidity] = useState(''); 
    const [showDetails, setShowDetails] = useState(false);

    const changeShowDetails = (e) => {
        e.preventDefault();
        setShowDetails(true);
    } 

    const submitRequest = (e) => {
        e.preventDefault();
    }

    const renderDetails = (showDetails) ? 
        <Collapse in={showDetails}>
            <div id="request-details">
                <AddRequestDetails 
                    description={description} 
                    setDescription={setDescription}
                    validity={validity}
                    setValidity={setValidity}
                /> 
            </div>
        </Collapse>
        : null;

    return(
        <div className={styles.request_card}>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={image} alt="LearnAndEarn User" className= {styles.request_pic} />
                    </div>
                    <div className="col-9">
                        <InputGroup className="mb-3">
                            <input 
                                placeholder="Make a request"
                                value={title}
                                className={styles.request_title_input}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                </div>
                {renderDetails}
                <div className="row">
                    <div className={`col ${styles.addDetails_container}`}>
                        {(showDetails) ? 
                            (<Button 
                                className={styles.addDetails_btn} 
                                disabled={title === '' || description === ''} 
                                onClick={submitRequest}
                                >Submit
                            </Button>)
                            : 
                            (<Button 
                                aria-expanded={showDetails}
                                aria-controls="request-details"
                                className={styles.addDetails_btn} 
                                disabled={title === ''} 
                                onClick={changeShowDetails}
                                >Add Details <FontAwesomeIcon icon={faCaretDown} />
                            </Button>)
                        }
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default CreateRequest;