import React from "react";
// import { Route, Switch } from "react-router-dom";
// import HomePage from "./home/HomePage";
// import AboutPage from "./about/AboutPage";
// import Header from "./common/Header";
// import PageNotFound from "./PageNotFound";
import MyNavbar from "./Navbar";
import TrendingTopics from "./TrendingTopics";
import CreateRequest from "./Request/CreateRequest";
import UpcomingWebinarCard from "./UpcomingWebinar/UpcomingWebinarCard";
import YourRequests from "./YourRequests";
import Feed from "./Feed/Feed";
import Comments from "./Comments/Comments";
//import "../temp.scss";
import styles from "../styles/App.scss";

// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "./SignupPage/Signup";

function App() {
  return (
    <div className={`container-fluid ${styles.signUpPage}`}>
      <SignUp/>
    </div>
  );
}

export default App;