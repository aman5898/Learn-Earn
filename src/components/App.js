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
import { Route, Switch } from "react-router-dom";
import Feed from "./Feed/Feed";
import Comments from "./Comments/Comments";
// import "../temp.scss";
import styles from "../styles/App.scss";
import PageNotFound from "./PageNotFound";
import Signup from "./SignupPage/Signup"

// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FeedPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <TrendingTopics />
          </div>
          <div className="row">
            <YourRequests />
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <CreateRequest />
          </div>
          <div className="row">
            <Feed />
          </div>

          {/* To be removed later */}
          <div className="row">
            <Comments />
          </div>
        </div>
        <div className="col">
          <UpcomingWebinarCard />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyNavbar />
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/login" component={Signup} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
