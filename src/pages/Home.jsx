import React from 'react'
import Carousel from '../component/home/Carousel'
import Categories from '../component/home/Categories'
import Featured from '../component/home/Featured'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Products from '../component/home/Products'
import Recents from '../component/home/Recents'
import Topbar from '../component/Topbar'
import Vendor from '../component/home/Vendor'
 

const Home = () => {
  return (
    <>
    <Topbar/>
    <Navbar />
    <Carousel />
    <Featured />
    <Categories/>
    <Products/>
    <Recents />
    <Vendor />
    <Footer />
    </>
  )
}

export default Home