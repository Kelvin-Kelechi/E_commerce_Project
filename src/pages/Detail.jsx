import React from 'react'
import Navbar from '../component/Navbar'
import Details from '../component/shop_detail/Details'
import Ymal from '../component/shop_detail/Ymal'
import Topbar from '../component/Topbar'
import Footer from '../component/Footer'

const Detail = () => {
  return (
    <>
     <Topbar/>
     <Navbar/>
     <Details />
     <Ymal />
     <Footer/>

    </>
  )
}

export default Detail