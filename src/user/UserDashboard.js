import React, { useState, useEffect } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import Menu from "../core/Menu";
import Twitter from "./twitter.png";
import Whatapp from "./whatapp.jpg";
import "./UserDashboard.css";
import {isAuthenticated } from "../auth/helper";
import { getUser } from "../core/helper/coreapicalls";
import SimpleSlider from "../core/SlidesPage";
import { Link  } from "react-router-dom";
 
 
const UserDashboard = () => {
 
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false)






   
  const loadAllUser = () => {
    getUser()
      .then(data => {
        if (data.error) {
          setError(data.error)
          console.log(error)
        } else {
          setUser(data);
        }
      });

  };

  useEffect(() => {
    loadAllUser()

  });

  const userId = isAuthenticated() && isAuthenticated().user.id;


  const pic = () => {
    return (

      <div>

        {user.map((user) => {

          if (userId === user.id) {
            return (

              <img className="avatar" src={user.profile} alt=".." />


            )

          } else {
            return null
          }
        })}
      </div>


    )
  };

  const Nameing = () => {
    return (

      <div>

        {user.map((user) => {

          if (userId === user.id) {
            return (

              <h1 className="NamePosition btn btn-success rounded  btn-sm px-5">HELLO !! {user.username}</h1>
            )
          } else {
            return null
          }
        })}
      </div>


    )
  };




  const Message1 = () => {
    return (
      <div className="bodypartTop">
        <div className="TitleBar">
          <h1 >HOSTEL BOOKING </h1>
        </div>



      </div>
    );
  };
  const Message2 = () => {
    return (
      <div className="bodypartbottom">


        <div className="Scrollbody">

          
          <div className="profilebox">
           <h2 className="welcome">WELCOME!!</h2>
             {pic()}
            {Nameing()}
             </div>
           

            {UserSetings()}
            {Message1()}
            
            
   

    <div class="row rowsl">
    <div class="col">
    Containers provide a means to center and horizontally pad your site’s contents. Use .container for a responsive pixel width or .container-fluid for width: 100% across all viewport and device sizes.
    Rows are wrappers for columns. Each column has horizontal<br/> padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows 
    
      
    </div>
    <div class="col">
    <div className="slideposition">
              <SimpleSlider />
            </div>


   
    </div>
    <div class="col">
    the possible 12 per row. So, if you want three equal-width columns across, you can use .col-4.
    Column widths are set in percentages, so they’re always fluid and sized <br/> relative to their parent element.
    Columns have horizontal padding to create the gutters between individual<br/> 
               
    columns, however, you can remove the margin from rows and padding from columns with .  
     
    </div>
  </div>





           

        </div>

      </div>
    );
  };

  const UserSetings = () => {
    return (
      <div>
        <div className="UserSetings">
          <div className="ScrollbarUsersetings">
            <Scrollbar >

            <Link
                 
                className="nav-link"
                to="/app"
                
              >
                ChangeProfile
              </Link>
              


            </Scrollbar>

          </div>

        </div>
      </div>
    );
  };


  return (
    <div>
      <Menu />
    




      <div>

     
       
        {Message2()}


      </div>
      <footer className="footer bg-dark">
        <div className="container-fluid bg-primary text-white text-center  ">

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

export default UserDashboard;