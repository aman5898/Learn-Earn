import React from "react";
import styles from "../../styles/App.scss";
import GoogleLogo from "../../temp/google.png";
import image from "../../temp/image.jpg";
import { Button } from "react-bootstrap";
import { GOOGLE_AUTH_LINK } from "../../constants";

function Signup() {

  return (
    <div className={styles.signUpCard}>
      <div className={styles.displayCard}>
        <div className={styles.outerCircle}>
          <img src={image} className={styles.pictureCircle} />
        </div>

        <div className={styles.displayCardTitle}>
          <ion-icon name="school" style={{ fontSize: 55 }}></ion-icon>
          &nbsp;Learn
        </div>

        <div className={styles.quote}>
          {
            '"Learn and Earn helps me in last minute exam preparations. All I do is create a request one night before exams and get classes scheduled in minutes."'
          }
        </div>

        <div className={styles.quoteBy}>- John Doe (Student)</div>
      </div>

      <div className={styles.startLogoContainer}>
        <ion-icon name="rocket" style={{ fontSize: 150 }} />
      </div>

      <div className={styles.message}>
        START YOUR <br /> &nbsp;&nbsp;JOURNEY!
      </div>

      <Button
        className={`${styles.signUpButton} ${styles.cursor_pointer}`}
      >
        <img src={GoogleLogo} alt="Google Logo" className={styles.googleLogo} />
        <a href={GOOGLE_AUTH_LINK} className={styles.signInText}> Sign in</a>
      </Button>
    </div>
  );
}

export default Signup;
