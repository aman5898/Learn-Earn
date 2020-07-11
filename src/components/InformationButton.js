import React, {useState} from 'react';
import styles from "../styles/App.scss";

function InformationButton (){

    const [showMenu, setShowMenu] = useState(false);

    var clickHandler = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className={`${styles.infobtn} ${styles.cursor_pointer}`} onClick={clickHandler}>
            {/* Cursor: pointer */}
            <ion-icon name="information-circle" />
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
