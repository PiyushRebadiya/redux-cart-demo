import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Profile/Login";
import LogOut from "./Profile/LogOut";
import Registration from './Profile/Registration'
import Public from './Public'
import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/cart" component={Cart} /> */}
          <Public exact path="/home" component={Home}/>
          <Public exact path="/cart" component={Cart}/>
          <Route exact path="/clear" component={LogOut} />
          <Route exact path="/new" component={Registration} />
          <Route
            exact
            path="*"
            render={(props) => <Login {...props} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
