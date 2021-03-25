import React, { useState, useEffect } from "react";
import localStorage from "redux-persist/es/storage";
import "./login.css";
import Navbar from "../Navbar";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUsers } from "../Action/Actions";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const [blank, setBlank] = useState([]);

  const result = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [loginStatus, setLoginStatus] = useState(false)
  let emailValidation = blank.email;
  let passwordValidation = blank.password;

  useEffect(() => {
    fetchUsers();
  }, []);

  const login = (e) => {
    e.preventDefault();
    console.log("blank", blank);
    console.log("login");
    dispatch(fetchUsers(blank))
    // fetch("http://localhost:3000/posts").then((data) => {
    //   data.json().then((resp) => {
    //     // console.log("Data", resp);
        let item = result.filter(
          (value) =>
            value.email === blank.email && value.password === blank.password
        );
        console.log('item',item);
        if (item.length > 0) {
          localStorage.setItem("login", JSON.stringify(item));
          // props.history.push("/home");
          toast.success("successfully!");
          setTimeout(() => {
            setLoginStatus(true)
          }, 2000);
        } else {
          toast.error("Login Failed!");
        }
    //   });
    // });
    if (emailValidation == null || passwordValidation == null) {
      toast.error("Enter a value!");
      return false;
    }
  };

  const createAccount = () => {
    props.history.push("/new");
  };
  if(loginStatus){
    return <Redirect to='/home'/>
  }
  return (
    <div>
      <Navbar />
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?cs=srgb&dl=pexels-burst-374074.jpg&fm=jpg"
              style={{ width: 450, height: 260 }}
              id="icon"
              alt="User Icon"
            />
          </div>{" "}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="user"
              placeholder="Enter a Email"
              onChange={(e) => setBlank({ ...blank, email: e.target.value })}
            />{" "}
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="Enter a Password"
              onChange={(e) => setBlank({ ...blank, password: e.target.value })}
            />{" "}
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={login}
            />{" "}
          </form>{" "}
          <div id="formFooter">
            <input
              type="submit"
              className="fadeIn fourth"
              value="Create Account"
              onClick={createAccount}
            />{" "}
          </div>{" "}
          <ToastContainer autoClose={2000} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
