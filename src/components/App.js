import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import "./App.scss"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="card">
        Hello it is a div.
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
