import React, { useState, useEffect } from "react";
import MyNavbar from "./Navbar";
import TrendingTopics from "./TrendingTopics";
import CreateRequest from "./Request/CreateRequest";
import UpcomingWebinarCard from "./UpcomingWebinar/UpcomingWebinarCard";
import YourRequests from "./YourRequests";
import Comments from "./Comments/Comments";
import { Route, Switch } from "react-router-dom";
import Feed from "./Feed/Feed";
import PageNotFound from "./PageNotFound";
import Signup from "./SignupPage/Signup";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import API from "../api/api";

// import "../temp.scss";

function FeedPage() {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const cookies = new Cookies();
      const header = cookies.get("x-auth-cookie");
      const { response, success } = await API("GET", "/profile", {}, header);
      if (success) {
        setProfileInfo(response == null ? [] : response);
      }
    };
    fetchProfile();
  }, []);

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
            <CreateRequest userInfo={profileInfo} />
          </div>
          <div className="row">
            <Feed userInfo={profileInfo} />
          </div>

          {/* To be removed later */}
          <div className="row">
            <Comments type="request" type_id="5ee7d3abcd3a31603c456c19" />
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
        <Route path="/signup" component={Signup} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
