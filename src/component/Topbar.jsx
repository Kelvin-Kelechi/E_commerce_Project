import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
const Topbar = () => {
  const [user, setUser] = useState({});
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribed();
    };
  });

   const clickOut = async ()=>{
    
      try {
        await logOut()
        console.log('logged out')
      } catch (error) {
        console.log(error)
      }
   }
  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-1 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center h-100">
            <a className="text-body mr-3" href="">
              About
            </a>
            <a className="text-body mr-3" href="">
              Contact
            </a>
            <a className="text-body mr-3" href="">
              Help
            </a>
            <a className="text-body mr-3" href="">
              FAQs
            </a>
          </div>
        </div>
        {user?.email ? (
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="btn-group">
                <div name="" className="btn btn-sm btn-light  ">
                  <Link to="/login" className="dropdown-item">
                    My Account
                  </Link>
                </div>
              </div>
              <div className="btn-group mx-2">
                <div name="" className="btn btn-sm btn-light  ">
                  <button className="dropdown-item" onClick={clickOut}>
                    LogOut
                  </button>
                </div>
              </div>
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none"></div>
          </div>
        ) : (
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="btn-group">
                <div name="" className="btn btn-sm btn-light  ">
                  <Link to="/login" className="dropdown-item">
                    Sign in
                  </Link>
                </div>
              </div>
              <div className="btn-group mx-2">
                <div name="" className="btn btn-sm btn-light  ">
                  <Link to="/signup" className="dropdown-item">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none"></div>
          </div>
        )}
      </div>
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-4">
          <a href="" className="text-decoration-none">
            <span className="h1 text-uppercase text-primary bg-dark px-2">
              Multi
            </span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
              Shop
            </span>
          </a>
        </div>
        <div className="col-lg-4 col-6 text-left">
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-6 text-right">
          <p className="m-0">Customer Service</p>
          <h5 className="m-0">+012 345 6789</h5>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
