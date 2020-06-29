import React,{Component} from "react";
// import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Form,NavDropdown,Button,FormControl} from 'react-bootstrap'; 
import classNames from 'classnames'
import styles from "../styles/App.scss";
import { faBell,faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auto } from "async";
import image from "../temp/image.jpg"


class MyNavbar extends Component{

    render(){

        const brandclass = classNames(styles.navbar_brand)
        const icon = classNames(styles.navbar_content);
        
        return(
        <Navbar bg="light" expand="lg" variant="light">
        <Navbar.Brand className={brandclass} href="#home">Learn&Earn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav.Link href="#home"><FontAwesomeIcon icon={faBell} className={icon} /></Nav.Link>
        <Nav.Link href="#link"><FontAwesomeIcon icon={faCommentAlt} className={icon} /></Nav.Link>
        <Nav.Link><img src={image} alt="LearnAndEarn User" className= {styles.navbar_userpic} /></Nav.Link>
        <Nav.Link>Bittoo</Nav.Link>
        </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default MyNavbar;