import React from "react";
import MyNavbar from "./Navbar";
import TrendingTopics from "./TrendingTopics";
import CreateRequest from "./Request/CreateRequest";
import UpcomingWebinarCard from "./UpcomingWebinar/UpcomingWebinarCard";
import YourRequests from "./YourRequests";
import { Route, Switch } from "react-router-dom";
import Feed from "./Feed/Feed";
import Comments from "./Comments/Comments";
import PageNotFound from "./PageNotFound";
import Signup from "./SignupPage/Signup"
import "react-toastify/dist/ReactToastify.css";
import API from '../api/api';

// import "../temp.scss";

function FeedPage() {

  const profile = async () => {

    const payload = {}

    let { response, success } = await API('GET', '/profile', payload, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxMmgiLCJpZCI6IjVlZTc0ZjI3OTRlMjhkOGI3NmY5YjI1NSIsImVtYWlsIjoic2F2aXRvamphc3dhbEBnbWFpbC5jb20iLCJpYXQiOjE1OTQ2OTkxMTh9.bwVGfkuE6ThlimxRrQx2lhEiPJvvjbWRdXtOK7iXAsE');
        
      if(success) {
        console.log(response);
      }

    return response;
  };

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
        <Route path="/signup" component={Signup} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
