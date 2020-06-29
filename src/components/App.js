import React from "react";
// import { Route, Switch } from "react-router-dom";
// import HomePage from "./home/HomePage";
// import AboutPage from "./about/AboutPage";
// import Header from "./common/Header";
// import PageNotFound from "./PageNotFound";
import Navbar from "./Navbar";
import TrendingTopics from "./TrendingTopics";
import CreateRequest from "./CreateRequest";
import UpcomingWebinar from "./UpcomingWebinar";
import YourRequests from "./YourRequests";
import Feed from "./Feed";
import "../temp.scss";
// import styles from "../styles/App.scss";

// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
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
          <div className="col">
            <div className="row">
              <CreateRequest />
            </div>
            <div className="row">
              <Feed />
            </div>
          </div>
          <div className="col">
            <UpcomingWebinar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route component={PageNotFound} />
//       </Switch>
//       <ToastContainer autoClose={3000} hideProgressBar />
