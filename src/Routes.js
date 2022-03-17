import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from "./user/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/Signin";



import Home from "./core/Home"
import App from "./user/Profile";
 
 


const Routes = () => {

    return (
        <BrowserRouter>

            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoutes path="/app" exact component={App} />
                 
                <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;