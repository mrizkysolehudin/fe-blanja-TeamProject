import React from "react";
// import s from "./checkout.module.css";
import "./checkout.css";
import Navbar from "../../components/Global/Navbar/index";
import FilterModal from "../../components/Global/FilterModal";

import svgPesanan1 from "../../assets/img/checkout/pesanan1.svg";
import svgPesanan2 from "../../assets/img/checkout/pesanan2.svg";




const Checkout = () => { 

  return(
    <div id="page-checkout" className="container-float">
      <Navbar />

      <div className="row content-checkout">
        <div className="col" style={{ marginTop: "140px" }}>
          <h2 className="fw-bold mb-4">Checkout</h2>
          <h6>Shipping Address</h6>

          {/* Card Address */}
          <div className="mycard card-address">
            <h6 className="fw-bold">Andreas Jane</h6>
            <p style={{ fontSize: "0.85rem" }}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <button className="btn-address mt-1">Choose another address</button>
          </div>

          {/* Card Product 1 */}
          <div className="mycard card-product">
            <div className="row">
              <div className="col-10">
                <img src={ svgPesanan1 } alt="" className="img-product"/>
                <div>
                  <p style={{ marginTop:"10px" }}>Men's formal suit - Black</p>
                  <p className="store-name">Zalora Cloth</p>
                </div>              
              </div>
              <div className="col-2 grid-end-center">
                <div>
                  <p className="fw-bold my-0" style={{ marginRight:"10px" }}>$ 20.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Product 2 */}
          <div className="mycard card-product">
            <div className="row">
              <div className="col-10">
                <img src={ svgPesanan2 } alt="" className="img-product"/>
                <div>
                  <p style={{ marginTop:"10px" }}>Men's Jacket jeans</p>
                  <p className="store-name">Zalora Cloth</p>
                </div>              
              </div>
              <div className="col-2 grid-end-center">
                <div>
                  <p className="fw-bold my-0" style={{ marginRight: "10px" }}>$ 20.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* If screen < 768px */}
          <div className="payment-inBelow"> {/* Card Shopping Summary */}
            <div className="mycard" style={{ width:"98%", height:"30%", padding: "20px" }}>
              <h6 className="fw-bold mb-3">Shopping summary</h6>
              <div className="d-flex flex-row justify-content-between">
                <p className="mb-2 text-lightGray">Order</p>
                <p className="mb-2 fw-bold">$ 40.0</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p className="text-lightGray">Delivery</p>
                <p className="fw-bold">$ 5.0</p>
              </div>
              <hr className="mt-0"/>
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold">Shopping summary</p>
                <p className="fw-bold text-red">$ 45.0</p>
              </div>
              <button className="btn-payment mt-1">Select payment</button>
            </div>
          </div>

        </div>     
      
      {/* Else If screen > 768px */}
        <div className="payment-inRight col-4 p-0" style={{ marginTop: "200px", height: "90%" }} >
          <div className="d-flex flex-row justify-content-end">
            {/* Card Shopping Summary */}
            <div className="mycard" style={{ width:"95%", height:"30%", padding: "20px" }}>
              <h6 className="fw-bold mb-3">Shopping summary</h6>
              <div className="d-flex flex-row justify-content-between">
                <p className="mb-2 text-lightGray">Order</p>
                <p className="mb-2 fw-bold">$ 40.0</p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p className="text-lightGray">Delivery</p>
                <p className="fw-bold">$ 5.0</p>
              </div>
              <hr className="mt-0"/>
              <div className="d-flex flex-row justify-content-between">
                <p className="fw-bold">Shopping summary</p>
                <p className="fw-bold text-red">$ 45.0</p>
              </div>
              <button className="btn-payment mt-1">Select payment</button>
            </div>
          </div>
        </div>
      </div>

      <FilterModal />
    </div>    
  )
}

export default Checkout;