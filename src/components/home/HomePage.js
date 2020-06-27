import React from "react";
import { Link } from "react-router-dom";
import {getAuthors} from "../../api/authorApi"



function onChange(){
  getAuthors().then((res)=>{
    console.log(res);
  });
  console.log("Fuck me");
}

const HomePage = () => (
  <div className="jumbotron">
    <h1>Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <input
         
          onChange={onChange}
        />
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
