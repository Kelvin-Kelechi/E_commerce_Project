import React, { useEffect, useState } from "react";
import {FaHeart} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";
const ItemProduct = ({ items }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [saved, setSaved] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribed();
    };
  });

  const itemID = doc(db, "users", `${user?.email}`);

  const itemSaved = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(itemID, {
        savedItem: arrayUnion({
          id: items.id,
          img: items.img,
          title: items.title,
          price: items.price,
        }),
      });
    } else {
      alert("Please Login or SignUp to save items");
    }
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={items.img} alt="" />
          <div className="product-action">
            <a
              className="btn btn-outline-dark btn-square"
              onClick={() => {
                if (user?.email) {
                  dispatch(addToCart(items.id));
                } else {
                  alert("Please login or sign up to add to cart");
                }
              }}
            >
              <i className="fa fa-shopping-cart"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" onClick={itemSaved }>
              {like? <FaHeart className="far fa-heart" />  : <i className="far fa-heart"></i>  }
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-sync-alt"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href="">
            {items.title}
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>${items.price}</h5>
            <h6 className="text-muted ml-2">
              <del>${items.oldPrice}</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
