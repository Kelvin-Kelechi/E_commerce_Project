import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {setDoc, doc} from 'firebase/firestore'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [pass, setPass] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8,}])?/g;

  const createUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', email), {
        savedItem:[]
      })
      return;
  };
  
  const signup = async (e) => {
    e.preventDefault();
     setLoading(true)
    try {
       await createUser(email, password);
      navigate('/');
      console.log("Signed in");
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
     setLoading(false)
  };
  const onChangeEmail = (e) => {
    setMsg(null);
    const value = e.target.value;
    setEmail(value);
    if (value && regEx.test(value) === false) {
      setMsg("Wrong email format");
    }
  };
  const OnchangePass = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 5) {
      setPass(false);
    } else {
      setPass(true);
    }
  };
  return (
    <>
      <div className="center">
        <h4>Sign Up</h4>
        <p>
          If you have no account, <Link to="/login"> Sign in</Link>
        </p>
      </div>

      <form action="/action_page.php" method="post">
        <div className="container">
          <div>
            <label htmlFor="uname">
              <b>Email</b>
            </label>
            <input
              className="auth"
              type="email"
              placeholder="Enter Username"
              name="uname"
              autoComplete="off"
              onChange={onChangeEmail}
              required
            />
            <p className="error"> {msg}</p>
          </div>

          <div>
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              className="auth"
              placeholder="Enter Password"
              type={open ? "text" : "password"}
              onChange={OnchangePass}
              required
            />
            {/* {open ? (
                <BsEyeSlash className="avatar" onClick={toggle} />
              ) : (
                <BsEye className="avatar" onClick={toggle} />
              )} */}
            {error ? <p className="error">{error}</p> : null}
          </div>

          {loading ? (
            <button
              className=" authbutton bg-primary"
              type="submit"
              disabled 
            >
              Loading...
            </button>
          )
          : (
            <button
              className=" authbutton bg-primary"
              type="submit"
              disabled={pass}
              onClick={signup}
            >
            Sign up
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Signup;
