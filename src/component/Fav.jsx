import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions'

const Fav = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
  return (
    <div className="container-fluid pt-5 pb-3">
    <h3 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Your Favorite Products</span></h3>
    <div className="row px-xl-5">
        { cartItems.map((items)=>(
            <div key={items.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={items.img} alt="" />
                    <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" onClick={()=> dispatch(addToCart(items.id))}><i className="fa fa-shopping-cart"></i></a>
                        <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                        <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                        <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                    </div>
                </div>
                <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href="">{items.title}</a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>${items.price}</h5><h6 className="text-muted ml-2"><del>${items.oldPrice}</del></h6>
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
        ))}
         
    </div>
</div>
  )
}

export default Fav