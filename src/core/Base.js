import React from "react";
import Menu from "./Menu";

import Twitter from "../twitter.png"
import Whatapp from "../whatapp.jpg"
 



const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,






}) => {
 
  return (
    <div>

      <div className="container-fluid">

       
        <div className="jumbotron bg-dark text-white text-center">
        
          <Menu />
         
          <h2 className="display-4 text-success" >{title}</h2>
          <p className="lead text-danger">{description}</p>


        </div>

        <div className={className}>


          {children}</div>
      </div>



      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-primary text-white text-center py-3 p-3">

          <b>we have created many of our appartment in different location</b><br />
          <b>Take our contacts we are always avlailable anytime</b><br />
          <button className="btn btn-warning btn-lg ">Contact Us</button>
          <br />

          <button className="btn  info  flex-1"><img src={Twitter} alt="" className="fa fa-angle-right" width="42" height="42" /><br /><a href="https://twitter.com/ANIDAkim1">Twitter</a></button>

          <button className="btn  p-l-1 mt-2 link flex-1,"><img src={Whatapp} alt="" className="fa fa-angle-right" width="42" height="42" /><br /><a href="https://wa.me/254790359782"> Whatapp </a></button>

          <br />

          <div className="container">
            <span className="text-warning">
              <b>We Provide Quality Hostel And Afordable <br />
                <p>Welcome!!</p></b>

              <br />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;


