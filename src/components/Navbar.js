import React,{Component} from "react";
// import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap'; 
import styles from "../styles/App.scss";
import image from "../temp/image.jpg"


class MyNavbar extends Component{

    render(){

        return(
        <Navbar className = {`fluid-container ${styles.navbar}`} expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">Learn&Earn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Form inline className={`${styles.navbar_item}`}>
                    <ion-icon name="search"></ion-icon>
                    <FormControl type="text" placeholder="Search" className={styles.searchbox}/>
                </Form>
                <Nav.Link href="#home" className={styles.navbar_item}>
                    <ion-icon name="chatbox"/>
                </Nav.Link>
                <Nav.Link href="#link" className={styles.navbar_item}>
                    <ion-icon name="notifications"/>
                </Nav.Link>
                <Nav.Link className={styles.navbar_item}><img src={image} alt="LearnAndEarn User" className= {styles.navbar_userpic} /></Nav.Link>
                <Nav.Link className={`${styles.navbar_item} ${styles.navbar_username}`}>John Doe</Nav.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
        );
    }
}

export default MyNavbar;