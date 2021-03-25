import React, { useState , useEffect } from "react";
import "./registration.css";
import Navbar from "../Navbar";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersUpdate , fetchUsers } from "../Action/Actions";



const Registration = (props) => {
  const [blank, setBlank] = useState([]);

  const dispatch = useDispatch();
  const result = useSelector((state) => state.update.update);

  let userValidation = blank.user;
  let emailValidation = blank.email;
  let passwordValidation = blank.password;
  let mobileValidation = blank.mobile;

  useEffect(() => {
    fetchUsersUpdate(result);
  }, []);


  const signUp = () => {
    console.log('signUp');
    console.log('result',result);
    dispatch(fetchUsersUpdate(blank))
    dispatch(fetchUsers(blank))
    // props.history.push('/')
    if (
      userValidation == null ||
      emailValidation == null ||
      passwordValidation == null ||
      mobileValidation == null
    ) {
      toast.error("Enter a value!");
      return false;
    } else {
      // fetch("http://localhost:3000/posts", {
        // method: "Post",
        // headers: {
          // "Content-Type": "application/json",
        // },
        // body: JSON.stringify(blank),
      // }).then((result) => {
        // result.json().then((resp) => {
          // console.log(resp);
          props.history.push("/");
          toast.info("Account Done!");
        // });
      // });
    }
  };
  return (
    <>
      <form>
        <Navbar />
        <div className="container">
          <h1>Registration Form</h1>
          <h5>Create New Account.</h5>
          <br />
          {/* <label for="email">
            <b>Username:</b>
          </label> */}
          <input
            type="text"
            name="user"
            placeholder="Enter Username"
            onChange={(e) => setBlank({ ...blank, user: e.target.value })}
          />
          {/* <label for="email">
            <b>Email:</b>
          </label> */}
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => setBlank({ ...blank, email: e.target.value })}
          />
          {/* <label for="psw">
            <b>Password:</b>
          </label> */}
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={(e) => setBlank({ ...blank, password: e.target.value })}
          />
          {/* <label for="email">
            <b>Phone Number:</b>
          </label> */}
          <br />
          <select name="phoneCode" required>
            <option selected hidden value="">
              +91
            </option>
          </select>
          <input
            type="phone"
            name="phone"
            placeholder="Phone Number"
            onChange={(e) => setBlank({ ...blank, mobile: e.target.value })}
          />
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <div className="clearfix">
            <button type="submit" className="btn btn-primary" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Registration;
