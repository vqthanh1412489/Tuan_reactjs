import React, { Component } from 'react';

import UserSideRoute from './UserSideRoute/UserSideRoute'; 
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import { AuthRequest } from "./auth/Authication";
import *as Constants from "./constants/constants";

import './App.scss';
import "antd/dist/antd.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faIgloo, faBars);



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = {Constants.LOGGIN_PATH} component = {Login}/>
          <Route path = "/" component = {UserSideRoute}/>
        </Switch>
      </div>
    );
  }
}

export default App;
