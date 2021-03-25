import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
// import localStorage from "redux-persist/es/storage";

const Public = ({ component: Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) => 
      localStorage.getItem("login") ? <Cmp {...props} /> : <Redirect to="/" />
    }
  />
)

export default Public;
