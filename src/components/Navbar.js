import React,{Component} from "react";
// import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap'; 
import styles from "../styles/App.scss";
import image from "../temp/image.jpg"


class MyNavbar extends Component{

    render(){

        return(
        <Navbar className = "fluid-container" bg="light" expand="lg" variant="light">
        <Navbar.Brand href="#home" className={styles.navbar_br}>Learn&Earn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav.Link href="#home" className={styles.navbar_item}>
            <ion-icon name="chatbox"/>
        </Nav.Link>
        <Nav.Link href="#link" className={styles.navbar_item}>
            <ion-icon name="notifications"/>
        </Nav.Link>
        <Nav.Link className={styles.navbar_item}><img src={image} alt="LearnAndEarn User" className= {styles.navbar_userpic} /></Nav.Link>
        <Nav.Link className={styles.navbar_item}>Bittoo</Nav.Link>
        </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default MyNavbar;