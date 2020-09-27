import React from 'react';
import './App.css'
import Home from "./components/home"
import Navbar from './components/navbar'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ResidenceForm from "./components/residenceForm";

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="container pt-4">
                <div className="row">
                    <div className="wrapper">
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/form" component={ResidenceForm}/>
                            <Route component={Error}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
