import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((state) => state.cart.carts);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    carts.forEach((prod) => {
      count += prod.amount;
    });

    setCartCount(count);
  }, [carts, cartCount]);

  return (
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <div
            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
            style={{ height: 65, padding: 30 }}
          >
            <h5 className="text-dark m-0">
              MULTI
              <HiShoppingBag size={30} />
              SHOP
            </h5>
          </div>
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            id="navbar-vertical"
            style={{ width: "calc(100% - 30)", zindex: 999 }}
          >
            <div className="navbar-nav w-100">
              <div className="nav-item dropdown dropright">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dresses <i className="fa fa-angle-right float-right mt-1"></i>
                </a>
                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                  <a href="" className="dropdown-item">
                    Men's Dresses
                  </a>
                  <a href="" className="dropdown-item">
                    Women's Dresses
                  </a>
                  <a href="" className="dropdown-item">
                    Baby's Dresses
                  </a>
                </div>
              </div>
              <a href="" className="nav-item nav-link">
                Shirts
              </a>
              <a href="" className="nav-item nav-link">
                Jeans
              </a>
              <a href="" className="nav-item nav-link">
                Swimwear
              </a>
              <a href="" className="nav-item nav-link">
                Sleepwear
              </a>
              <a href="" className="nav-item nav-link">
                Sportswear
              </a>
              <a href="" className="nav-item nav-link">
                Jumpsuits
              </a>
              <a href="" className="nav-item nav-link">
                Blazers
              </a>
              <a href="" className="nav-item nav-link">
                Jackets
              </a>
              <a href="" className="nav-item nav-link">
                Shoes
              </a>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">
                Multi
              </span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                Shop
              </span>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link className="nav-item nav-link  " to="/">
                  {" "}
                  Home
                </Link>

                <Link className="nav-item nav-link" to="/shop">
                  {" "}
                  Shop
                </Link>

                <Link className="nav-item nav-link" to="/shop-detail">
                  {" "}
                  Detail
                </Link>
                <Link className="nav-item nav-link" to="/cart">
                  {" "}
                  Cart
                </Link>
                <Link className="nav-item nav-link" to="/checkout">
                  {" "}
                  Checkout
                </Link>

                <Link className="nav-item nav-link" to="/contact">
                  {" "}
                  Contact
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <Link  to='/favorite' className="btn px-0">
                  <i className="fas fa-heart text-primary"></i>
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{ paddingBottom: 2 }}
                  >
                    0
                  </span>
                </Link>
                <Link className="btn px-0 ml-3" to="/cart">
                  <i className="fas fa-shopping-cart text-primary"></i>
                  <span
                    className="badge text-secondary border border-secondary rounded-circle"
                    style={{ paddingBottom: 2 }}
                  >
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
