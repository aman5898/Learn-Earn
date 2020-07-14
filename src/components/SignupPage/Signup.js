import React from 'react';
import styles from "../../styles/App.scss";
import GoogleLogo from "../../temp/google.png"

function Signup() {
    return (
        <div className={styles.signUpCard}>
            <div className={styles.displayCard}>
                
            </div>

            <div className={styles.startLogo}>
                <ion-icon name="rocket-sharp" size="large"/>
            </div>

            <div className={styles.message}>
                START YOUR <br/> &nbsp;&nbsp;JOURNEY!
            </div>

            <div className={styles.signUpButton}>
                <img src={GoogleLogo} alt="Google Logo" className={styles.googleLogo}/>    
                <div className={styles.signInText}>
                    Sign In
                </div>            
            </div>
        </div>
    )
}

export default Signup;
