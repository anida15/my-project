import React, { useState } from "react";
import {   Redirect } from "react-router-dom";
import "../style.css";
import { Link } from "react-router-dom";
 

import Base from "../core/Base";
import { signin, authenticate, isAuthenticated } from "../auth/helper";

 

const Signin = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    error: false,
    loading: false,
    didRedirect: false,
    userNotExiteMessage:false,
     
  });
   
  const {  username, password, error,  loading,userNotExiteMessage } =
    values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };

  
    

  const onSumit = (event) => {
    event.preventDefault();
    
    if ( password === '' || username === '' ) {
      setValues({ ...values, error: true});
			
    }else{
    setValues({ ...values, error: false,  loading: true,userNotExiteMessage:false });

    signin({ username, password })
      .then((data) => {
        console.log(data);

        if (data.token) {
         
          //let sessionToken = data.token;
          authenticate(data, () => {
            console.log("Token Have been Initiated");
            setValues({
              ...values,
              didRedirect: true,
              
            });
             
          });
        } else {
          console.log("weka vitu safi bana ")
          setValues({
            ...values,
            loading: false,
            userNotExiteMessage:true,
          });
        }
        
      })
      
      .catch((e) => console.log(e));
    }
      //upto here
      
  };





  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/user/dashboard" />;
    }
  };

  
  const loadingMessage = () => {
    return (
      loading && (
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div className="alert alert-success" >
             Validating...  
          </div>
        </div>
      </div>
 
      )
    );
  };
 
  
  const NoExiteMessage = () => {
    return (
      userNotExiteMessage && (
       
        <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div className="alert alert-danger" >
              User Does Not Exite!
          </div>
        </div>
      </div>
      )
    );
  };
  
     
  

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="take">
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group text-center">
              <label className="text-success">Username</label>
              <input
                name="email"
                className="form-control text-center"
                value={username}
                onChange={handleChange("username")}
                type="text"
              />
            </div>
            <div className="form-group text-center">
              <label className="text-success">Password</label>
              <input
                name="password"
                className="form-control text-center"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <button
              onClick={onSumit}
              className="btn btn-success btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
    );
  };

  return (
    <Base title="SIGN IN " description="Login To Hostel Dashboard!">
         {NoExiteMessage()}
         {errorMessage()}
         {loadingMessage()}

      {signInForm()}
      <p className="text-center">
         You Don't Have An Account? <Link to="/signup">Sign Up Page</Link>
      </p>
      {performRedirect()}
    </Base>
  );
};

export default Signin;