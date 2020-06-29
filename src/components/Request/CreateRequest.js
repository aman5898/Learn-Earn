import React, { useState } from "react";
import styles from "../../styles/App.scss";
import image from "../../temp/image.jpg";

function CreateRequest(){

    const [value, setValue] = useState('');

    return(
        <div className={styles.card}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={image} alt="LearnAndEarn User" className= {styles.feedpic} />
                    </div>
                    <div className="col-8">
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Make a request"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateRequest;