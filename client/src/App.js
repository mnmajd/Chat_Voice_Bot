import React, {Component} from 'react';
import './App.css';
import Admin from "./components/Admin";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Route,Router} from 'react-router-dom'

import store from './store';
import { history } from './helpers';
import Home from "./components/Home";
import {PrivateRoute} from "./components/PrivateRoute";



class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Route path='/admin' component={Admin}/>
                <Route path="/home"  component={Home}/>
            </BrowserRouter>
    )
        ;
    }
}

export default App;