import React, {Component} from 'react';
import './App.css';
import Admin from "./components/Admin";
import {Provider} from 'react-redux';
import {Route,Router ,Switch,BrowserRouter} from 'react-router-dom'

import store from './store';
import { history } from './helpers';
import Home from "./components/Home";
import {PrivateRoute} from "./components/PrivateRoute";



class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <React.Fragment>
                        <Switch>
                            <Route exact path='/admin' component={Admin}/>
                            <Route path="/home" exact component={Home}/>
                        </Switch>
                    </React.Fragment>
                </Router>
            </Provider>
    )
        ;
    }
}

export default App;