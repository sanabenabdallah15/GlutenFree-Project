import React from 'react'
import img from "./img/Pasta.jpg"
import img1 from "./img/Breads.jpg"
import img2 from "./img/noodelss.jpg"
import img3 from "./img/chocolat.jpg"
import img4 from "./img/rice.jpg"
import img5 from "./img/Drink.jpg"
import img6 from "./img/images.png"
import Pasta from '../Product/Pasta'
import "../../App.css"
import {Link} from "react-router-dom"

function Home() {

  



  return (
    <>
    <div>
      <h1 style={{fontSize:"100px",color:"green"}}>Gluten Free Store</h1>
    </div>
   
       <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
                    <h1 class="fa fa-check text-primary m-0 mr-3"></h1>
                    <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
                    <h1 class="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                    <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
                    <h1 class="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                    <h5 class="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="d-flex align-items-center border mb-4" style={{padding: "30px"}}>
                    <h1 class="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                    <h5 class="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
 <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
            <div class="col-lg-4 col-md-6 pb-1">
                <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
                    <p class="text-right">15 Products</p>
                    <Link to="/Pasta"> 
                        <img class="img-fluid" src={img} alt=""/>
                 </Link>

                    <h5 class="font-weight-semi-bold m-0">Pasta</h5>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 pb-1">
                <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
                    <p class="text-right">15 Products</p>
                    <a href="/Breads" class="cat-img position-relative overflow-hidden mb-3">
                        <img class="img-fluid" src={img1} alt=""/>
                    </a>
                    <h5 class="font-weight-semi-bold m-0">Breads</h5>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 pb-1">
                <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
                    <p class="text-right">15 Products</p>
                    <a href="/Noodels" class="cat-img position-relative overflow-hidden mb-3">
                        <img class="img-fluid" src={img2} alt=""/>
                    </a>
                    <h5 class="font-weight-semi-bold m-0">Noodels</h5>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 pb-1">
                <div class="cat-item d-flex flex-column border mb-4"  style={{padding: "30px"}}>
                    <p class="text-right">50 Products</p>
                    <a href="/Chocolat" class="cat-img position-relative overflow-hidden mb-3">
                        <img class="img-fluid" src={img3} alt=""/>
                    </a>
                    <h5 class="font-weight-semi-bold m-0">chocolaties&candies</h5>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 pb-1">
                <div class="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
                    <p class="text-right">30 Products</p>
                    <a href="/Rice" class="cat-img position-relative overflow-hidden mb-3">
                        <img class="img-fluid" src={img4} alt="" style={{width:"89%"}}/>
                    </a>
                    <h5 class="font-weight-semi-bold m-0">Rice</h5>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 pb-1">
                <div class="cat-item d-flex flex-column border mb-4"  style={{padding: "30px"}}>
                    <p class="text-right">15 Products</p>
                    <a href="/Drink" class="cat-img position-relative overflow-hidden mb-3">
                        <img class="img-fluid" src={img5} alt="" style={{width:"55%"}}/>
                    </a>
                    <h5 class="font-weight-semi-bold m-0">Drink</h5>
                </div>
            </div>
        </div>
    </div>
    <div >
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                
                    <img src={img6} style={{marginBottom:"20%;"}}/> 
                
                <p>C'est le premier site de vente en ligne des produits sans gluten en Tunisie</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>08 Street, Tunis, Tunisia</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>Gluten-free@gmail.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+216 22  678 190</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                   
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-dark mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
                            <a className="text-dark mb-2" href="Best Saleries.html"><i className="fa fa-angle-right mr-2"></i>Best saleries</a>
                         
                            <a className="text-dark mb-2" href="cart.html"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a className="text-dark mb-2" href="checkout.html"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a className="text-dark" href="contact.html"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button className="btn btn-primary btn-block border-0 py-3" type="submit"style={{backgroundColor:"green"}}>Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  
 </>
  )
}

export default Home
