import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";


import Header from "./Header";
import Login from "./Login";
import Background from "../assets/img/lock.jpg";
import Register from "./Register";
import Chat from "./Chat";
import Claim from "./Claim";
import Profile from "./Profile";

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
                                <Route path="/home/service"  component={Services}/>
                                {/*<Route path="/home"  component={Chat}/>*/}
                            </div>
                            </div>
                        </div>

                </React.Fragment>
            </Router>

        );
    }
}

export default Home;