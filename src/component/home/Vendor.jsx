import React from 'react'
import Vendor1 from '../../assets/vendor-1.jpg'
import Vendor2 from '../../assets/vendor-2.jpg'
import Vendor3 from '../../assets/vendor-3.jpg'
import Vendor4 from '../../assets/vendor-4.jpg'
import Vendor5 from '../../assets/vendor-5.jpg'
import Vendor6 from '../../assets/vendor-6.jpg'
import Vendor7 from '../../assets/vendor-7.jpg'
import Vendor8 from '../../assets/vendor-8.jpg'
const Vendor = () => {
  return (
    <div className="container-fluid py-5">
    <div className="row px-xl-5">
        <div className="col">
            <div className="owl-carousel vendor-carousel">
                <div className="bg-light p-4">
                    <img src={Vendor1} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={Vendor2} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={Vendor3} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={Vendor4} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={Vendor5} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={Vendor6} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={Vendor7} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={Vendor8} alt=""/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Vendor