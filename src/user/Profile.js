import React, { Component } from 'react';
import axios from 'axios';
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import "./profile.css"
class App extends Component {
    userId = isAuthenticated() && isAuthenticated().user.id;

    state = {
        image: null,
        success:false,
        error:false,

    };

     loadingMessage = () => {
        return (
       this.state.error && (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div className="alert alert-success" >
                 No Update 
              </div>
            </div>
          </div>
     
          )
        );
      };
     

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.image === null){

            this.setState({
                error:true
            })

            return null  

        }else{
            console.log(this.state);
            let form_data = new FormData();
            form_data.append('profile', this.state.image, this.state.image.name);
    
            let url = `https://djangobackends.herokuapp.com/user/${this.userId}/`;
            axios.patch(url, form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => console.log(err))


        }


 
    };
    
    render() {
        return (
            <div className="App">
                {this.loadingMessage()}
                <form class="md-form" >
                    <div className="text-white">
                        <input type="file"
                            id="image"
                            className="custom-file-input  "
                            aria-describedby="inputGroupFileAddon01"
                            accept="image/png, image/jpeg" onChange={this.handleImageChange} required />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose Photo
                        </label>

                    </div>

                    <button
                        onClick={this.handleSubmit}
                        className="btn btn-success btn-block"
                    >
                         <Link
                            to="/user/dashboard"
                        >  Update Profile

                        </Link>
                      
                    </button>
                    <button
                        className="btn btn-success btn-block"
                    >
                        <Link
                            to="/user/dashboard"
                        >Return Dashboard

                        </Link>

                    </button>


                </form>

                
  
                
            </div>
        );
    }
}

export default App;