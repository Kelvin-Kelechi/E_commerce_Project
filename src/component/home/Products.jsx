import React, { useEffect, useState } from "react";
import Offer1 from "../../assets/offer-1.jpg";
import Offer2 from "../../assets/offer-2.jpg";
import { useSelector, useDispatch } from "react-redux";

import ItemProduct from "./ItemProduct";
const Products = () => {
  const { cartItems } = useSelector((state) => state.cart);
  
  

  return (
    <>
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>

        <div className="row px-xl-5">
          {cartItems.map((items) => (
        <ItemProduct key={items.id} items={items}/>
          ))}
        </div>
      </div>

      {/*offer-start*/}
      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: 300 }}>
              <img className="img-fluid" src={Offer1} alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: 300 }}>
              <img className="img-fluid" src={Offer2} alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*offer-End*/}
    </>
  );
};

export default Products;
