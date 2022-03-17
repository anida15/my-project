import React, { useState } from 'react';
import Base from '../core/Base';
import { signup } from "../auth/helper";
import "../style.css";
import { Link } from "react-router-dom";
 


const Signup = () => {
  const [values, setValues] = useState({
	username:'',  
	first_name:'',  
	last_name:'',  
	dob:'', 
	gender:'Male',
    phone:'+254', 
	email:'', 
	password:'',
	confirm:'',
	error:false,
	success:false,
	submitted:false,
	perror:false,
	 

     
     
  });
   
  const {   username,first_name,last_name,dob,gender,phone, email, password,confirm, error ,submitted,perror } =
    values;

  const handleChange = (name) =>
    (event) => {
      setValues({ ...values , error: false, [name]: event.target.value });
    };

  
  const onSumit = (event) => {
    event.preventDefault();
    //here
    if ( password === '' || username === ''||first_name===''||last_name===''||dob===''||gender===''||phone===''||email===''||password===''||confirm==='' ) {
      setValues({ ...values, error: true,});	

	}else{
	if(password !== confirm){
	setValues({ ...values, perror: true});	
	}else {setValues({ ...values, error: false,submitted:true ,perror:false });

    signup({ username ,first_name,last_name,dob,gender,phone, email, password })
     } 
    }
      
  };
 

  

  const errorMessage = () => {
    return (
      <div className="row rowp">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger text-center"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };

// Showing success message
const successMessage = () => {
	return (
		 <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success text-center"
            style={{ display: submitted ? "" : "none" }}
          >
           User {username} successfully registered!!
          </div>
        </div>
      </div>
 
	)
 
};
const errorPassword = () => {
	return (
		<div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger text-center"
            style={{ display:  perror ? "" : "none" }}
          >
           Password Don't Match
          </div>
        </div>
      </div>
	);
};

  const signUpForm = () => {
    return (
		<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div className="form">
						<form>

						 

							<div className="form-group offset-sm-0 text-center">
								{/* Labels and inputs for form data */}
								<label className="label text-success">Username</label><br />
								<input onChange={handleChange("username")} className="input text-center "
									value={username} type="text" placeholder='Username' />
							</div>

							<div className="form-group offset-sm-0 text-center">
								{/* Labels and inputs for form data */}
								<label className="label text-success">First Name</label><br />
								<input onChange={handleChange("first_name")} className="input text-center"
									value={first_name} type="text" placeholder='First Name' />
							</div>

							<div className="form-group offset-sm-0 text-center">
								{/* Labels and inputs for form data */}
								<label className="label text-success">Last Name</label><br />
								<input onChange={handleChange("last_name")} className="input text-center"
									value={last_name} type="text" placeholder='Last Name' />
							</div>

							<div className="form-group offset-sm-0  text-center">
								{/* Labels and inputs for form data */}
								<label className="label text-success">Date Of Birth</label><br />
								<input onChange={ handleChange("dob")} className="input text-center"
									value={dob} type="date" placeholder="date of birth" />
							</div>

							<div className="form-group offset-sm-0 text-center">
								{/* Labels and inputs for form data */}
								    <label className="label text-success">Gender</label><br />
								
								    <input onChange={handleChange("gender")} className="radio text-center"
									value="Male" type="radio"  checked={gender==='Male'} />Male
									<input onChange={handleChange("gender")} className="radio text-center"
									value= "Female" type="radio" checked={gender==='Female'}   />Female
									<input onChange={handleChange("gender")} className="radio text-center"
									value="Others" type="radio"  checked={gender==='Others'}  />Others
							</div>

							<div className="form-group offset-sm-0 text-center">
								{/* Labels and inputs for form data */}
								<label className="label text-success">Telephone</label><br />
								<input onChange={handleChange("phone")} className="phone"
									value={phone} type="text" placeholder='Phone Number' defaultValue={345}/>
							</div>

							<div className="form-group offset-sm-0 text-center">
								<label className="label text-success">Email Address</label><br />
								<input onChange={handleChange("email")} className="input text-center"
									value={email} type="email" placeholder='Email address' />
							</div>

							<div className="form-group offset-sm-0 text-center">
								<label className="label text-success">Password</label><br />
								<input onChange={handleChange("password")} className="input text-center"
									value={password} type="password" placeholder='Password' />
							</div>

							<div className="form-group offset-sm-0 text-center">
								<label className="label text-success"> Confirm Password</label><br />
								<input onChange={handleChange("confirm")} className="input text-center"
									value={confirm} type="password" placeholder='Confirm Password' />
							</div>


							<button onClick={onSumit} className="btn btn-success btn-block offset-sm-0 " type="submit">
								Submit
							</button>
						</form>
					</div>
				</div >
			</div>
		
       
    );
  };

return(
    <Base title="SIGN IN " description="Login To Hostel Dashboard!">
         
         {errorMessage()}
		 {errorPassword()}
         {successMessage()}

          {signUpForm()}
      <p className="text-center">
	  You Have An Account? <Link to="/signin">Sign In Page</Link>
      </p>
       
    </Base>
  );
};

export default Signup;
