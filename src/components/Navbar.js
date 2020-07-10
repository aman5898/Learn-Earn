import React,{Component} from "react";
// import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap'; 
import styles from "../styles/App.scss";
import { faBell,faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../temp/image.jpg"


class MyNavbar extends Component{

    render(){
        // const brandclass = classNames(styles.navbar_brand)
        const style_items = {
            color:"#797979" , 
            padding : "0.3125rem 0.5rem 0.3125rem 0.5rem"
        }
        const style_userpic = {
            color:"#797979" , 
            padding : "0.3125rem 0rem 0.3125rem 0.5rem"        
        }
        
        return(
        <Navbar className = "fluid-container" bg="light" expand="lg" variant="light">
        <Navbar.Brand href="#home" style={{position:"absolute",left:"10%"}}>Learn&Earn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav.Link href="#home" style={style_items}><FontAwesomeIcon icon={faBell} className={styles.navbar_content} /></Nav.Link>
        <Nav.Link href="#link" style={style_items}><FontAwesomeIcon icon={faCommentAlt} className={styles.navbar_content}  /></Nav.Link>
        <Nav.Link style={style_userpic}><img src={image} alt="LearnAndEarn User" className= {styles.navbar_userpic} /></Nav.Link>
        <Nav.Link style={style_items}>Bittoo</Nav.Link>
        </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default MyNavbar;