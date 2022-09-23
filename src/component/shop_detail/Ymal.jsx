import React from 'react'
import Product1 from '../../assets/product-1.jpg'
import Product2 from '../../assets/product-2.jpg'
import Product3 from '../../assets/product-3.jpg'
import Product4 from '../../assets/product-4.jpg'
import Product5 from '../../assets/product-5.jpg'
const Ymal = () => {
  return (
    <>
    <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">You May Also Like</span></h2>
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel related-carousel">
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={Product1} alt="" />
                            <div className="product-action">
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={Product2} alt=""/>
                            <div className="product-action">
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={Product3} alt=""/>
                            <div className="product-action">
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={Product4} alt=""/>
                            <div className="product-action">
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src={Product5} alt=""/>
                            <div className="product-action">
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                                <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
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
            </div>
        </div>
    </div>
    </>
  )
}

export default Ymal