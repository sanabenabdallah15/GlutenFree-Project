import React, { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";
import { getProduct,deleteProduct } from "../../redux/actionProducts";

import { useNavigate } from "react-router-dom";
import PastaCard from "./PastaCard";
function Pasta ({el}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const getall=()=>{
        dispatch(getProduct());
    }
    useEffect(getall,[])
    const allproduct=useSelector((state)=>state.Product.product)
    console.log(allproduct,"paaaaastaaaa")
    const pasta= allproduct && allproduct.filter((el)=>el.Category==="pate")
  //  console.log(pasta,"rrrrrrr")
    
 
     

    return(
    <>
   
    
   
    <div className="container-fluid  mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px",backgroundColor:"rgb(77, 148, 93)",marginTop:"10%",padding:"5px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3"style={{color:"white"}}>Pasta</h1>
            <div className="d-inline-flex">
                <p className="m-0"><a href="/"style={{color:"white"}}>Home</a></p>
                <p className="m-0 px-2">-</p>
               
            </div>
        </div>
    </div>

    <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            
            <div className="col-lg-3 col-md-12">
               
                <div className="border-bottom mb-4 pb-4">
                    <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="price-all"/>
                            <label className="custom-control-label" for="price-all">All Price</label>
                            <span className="badge border font-weight-normal">100</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1"/>
                            <label className="custom-control-label" for="price-1">0DT - 10DT</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2"/>
                            <label className="custom-control-label" for="price-2">100DT - 20DT</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-3"/>
                            <label className="custom-control-label" for="price-3">20DT - 30DT</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-4"/>
                            <label className="custom-control-label" for="price-4">30DT - 40DT</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="price-5"/>
                            <label className="custom-control-label" for="price-5">40DT - 50DT</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div> 
            </div>
            <div className="col-lg-9 col-md-12">
            
                    <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search by name"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="dropdown ml-4">
                                <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            Sort by
                                        </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <a className="dropdown-item" href="#">Latest</a>
                                    <a className="dropdown-item" href="#">Popularity</a>
                                    <a className="dropdown-item" href="#">Best Rating</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-4">
                              <h2 className="section-title px-5"><span className="px-2">Pasta</span></h2>
                     </div>
                    <div  style={{display:"flex",flex:"wrap",marginRight: "-15px",marginLeft: "-15px;"}}>
                        {pasta && pasta.map(filteredCategory=> (
                            <PastaCard filteredCategory={filteredCategory}/>
                            ))}  
                               
                    </div>
                </div>
            
            </div>
                 
                 
        </div>
   </div>
  



    
</>
)
}

 export default Pasta



 /*<div className="col-lg-3 col-md-6 col-sm-12 pb-1">
 <div className="card product-item border-0 mb-4">
     <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
         <img className="img-fluid w-100" src={img2} alt=""/>
     </div>
     <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
         <h6 className="text-truncate mb-3">Tortilioni</h6>
         <div className="justify-content-center">
             <h6>6.00DT</h6><h6 className="text-muted ml-2"><del>8.00DT</del></h6>
         </div>
     </div>
     <div className="card-footer justify-content-between bg-light border">
         <a href="Product detail 2.html" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
         <a href="cart.html" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
        
     </div>
    
      
 </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12 pb-1">
 <div className="card product-item border-0 mb-4">
     <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
         <img className="img-fluid w-100" src={img3} alt=""/>
     </div>
     <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
         <h6 className="text-truncate mb-3">Mini Penne </h6>
         <div className=" justify-content-center">
             <h6>8.00DT</h6><h6 className="text-muted ml-2"><del>9.00DT</del></h6>
         </div>
     </div>
     <div className="card-footer  justify-content-between bg-light border">
         <a href="product detail.html" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
         <a href="cart.html" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
        
     </div>
 </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12 pb-1">
 <div className="card product-item border-0 mb-4">
     <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
         <img className="img-fluid w-100" src={img4} alt=""/>
     </div>
     <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
         <h6 className="text-truncate mb-3">Torsades </h6>
         <div className=" justify-content-center">
             <h6>5.00DT</h6><h6 className="text-muted ml-2"><del>7.000DT</del></h6>
         </div>
     </div>
     <div className="card-footer justify-content-between bg-light border">
         <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
         <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
         
     </div>
 </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12 pb-1">
 <div className="card product-item border-0 mb-4">
     <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
         <img className="img-fluid w-100" src={img5} alt=""/>
     </div>
     <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
         <h6 className="text-truncate mb-3">Penne</h6>
         <div className=" justify-content-center">
             <h6>5.000DT</h6><h6 className="text-muted ml-2"><del>6.000DT</del></h6>
         </div>
     </div>
     <div className="card-footer  justify-content-between bg-light border">
         <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
         <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
         
     </div>
 </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12 pb-1">
 <div className="card product-item border-0 mb-4">
     <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
         <img className="img-fluid w-100" src={img6}alt=""/>
     </div>
     <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
         <h6 className="text-truncate mb-3">Fuvilii</h6>
         <div className=" justify-content-center">
             <h6>8.000DT</h6><h6 className="text-muted ml-2"><del>9.000DT</del></h6>
         </div>
     </div>
     <div className="card-footer  justify-content-between bg-light border">
         <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
         <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
       
     </div>
 </div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12 pb-1">
 <div className="card product-item border-0 mb-4">
     <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
         <img className="img-fluid w-100" src={img8} alt="" style={{height:"290px"}}/>
     </div>
     <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
         <h6 className="text-truncate mb-3">Coquielltte</h6>
         <div className=" justify-content-center">
             <h6>8.00DT</h6><h6 className="text-muted ml-2"><del>10.00DT</del></h6>
         </div>
     </div>
     <div className="card-footer  justify-content-between bg-light border">
         <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
         <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
      
     </div>
 </div>*/