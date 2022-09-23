import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { auth } from "../firebase";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pass, setPass] = useState(true);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8,}])?/g;
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logIn = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await signIn(email, password);
       navigate('/')
       console.log('logged in')
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
    setLoading(false)
  };
  // const toggle = () => {
  //   setOpen(!open);
  // };
  const onChangePass = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 5) {
      setPass(false);
    } else {
      setPass(true);
    }
  };

  const onChangeEmail = (e) => {
    setMsg(null);
    const value = e.target.value;
    setEmail(value);
    if (value && regEx.test(value) === false) {
      setMsg("Wrong email format");
    }
  };

  return (
    <>
      <div className="center">
        <h4>Log In</h4>
        <p>
          If you have no account, <Link to="/signup"> Sign up</Link>
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
              type={open ? "text" : "password"}
              placeholder="Enter Password"
              name="psw"
              onChange={onChangePass}
              required
            />
            {/* {open ? (
                <BsEyeSlash className="avatar" onClick={toggle} />
              ) : (
                <BsEye className="avatar" onClick={toggle} />
              )} */}
             {error ? <p className="error">{error}</p> : null}
          </div>

         {loading ?<button
            className="authbutton bg-primary"
            type="submit"
            disabled
          >
            Loading...
          </button>:
          <button
            className="authbutton bg-primary"
            type="submit"
            disabled={pass}
            onClick={logIn}
            
          >
            Log in
          </button>}
        </div>
      </form>
    </>
  );
};

export default LogIn;
