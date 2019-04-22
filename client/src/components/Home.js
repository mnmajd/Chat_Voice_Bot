import React, {Component} from "react";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";


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

                    <div className="wrapper wrapper-full-page">
                        <Route path="*" exact component={Header} />

                        <div className="page-header register-page header-filter" style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top center'
                        }}>

                            <div className="container">
                                    <Route path="/home" exact component={Chat}/>
                                    <Route path="/home/register" component={Register}/>

                            </div>
                        </div>
                    </div>



        );
    }
}

export default Home;