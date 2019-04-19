import React, {Component} from 'react';

import './App.css';
import Admin from "./components/Admin";
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import Home from "./components/Home";


class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <Route path="/admin" exact component={Admin}/>
                        <Route path="/home" exact component={Home}/>
                    </React.Fragment>
                </Router>
            </Provider>
    )
        ;
    }
}

export default App;