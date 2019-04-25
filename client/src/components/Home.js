import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";


import Header from "./Header";
import Login from "./Login";
import Background from "../assets/img/lock.jpg";
import Register from "./Register";
import Profile from "./Profile";
import Service from "./ServiceComponent/Service";
import AboutMe from "./AboutMe";
import SendClaim from "./ClaimComponent/SendClaim";
import Chat from "./Chat";
 import SimpleMapExample from "./SimpleMapExample";
import Voice from "./Voice";
class Home extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="*" exact component={Header} />
                    <div className="wrapper wrapper-full-page">
                        <div className="page-header register-page header-filter" style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top center'
                        }}>

                            <div className="container">
                                <Route path="/home/login"  component={Login}/>
                                <Route path="/home/register"  component={Register}/>
                                <Route path="/home/profile"  component={Profile}/>
                                <Route path="/home/service"  component={Service}/>
                                <Route path="/home/aboutme"  component={AboutMe}/>
                                <Route path="/home/sendClaim"  component={SendClaim}/>
                                <Route path="/home"  exact component={Chat}/>
                                <Route path="/home/map"  exact component={SimpleMapExample}/>
                                <Route path="/home/voice"   component={Voice}/>
                            </div>
                            </div>
                        </div>

                </React.Fragment>
            </Router>

        );
    }
}

export default Home;