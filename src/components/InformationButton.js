import React, {useState} from 'react';
import styles from "../styles/App.scss";
import image from "../temp/info.png";


function InformationButton (){

    const [showMenu, setShowMenu] = useState(false);

    var clickHandler = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className={styles.infobtn} onClick={clickHandler}>
            {/* Cursor: pointer */}
            <img src={image} alt="info button" className={styles.infobtnpic} />
            { showMenu && <div className={styles.infomenu}>
                <div className={styles.infomenucreateditem}>
                    Created- 2 days ago
                </div>
                <hr />
                {/* Cursor: pointer */}
                <div className={styles.infomenuitems}>
                    Report this post
                </div>
            </div>}
        </div>
    );
}

export default InformationButton;
