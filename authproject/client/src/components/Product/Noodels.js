import React, { useEffect } from "react";
import img1 from "../pages/img/Pasta 1.png"

import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actionProducts";
import PastaCard from "./PastaCard";

function Noodels () {
    const dispatch=useDispatch()
    const getall=()=>{
        dispatch(getProduct());
    }
    useEffect(getall,[])
    const allproduct=useSelector((state)=>state.Product.product)
    console.log(allproduct,"paaaaastaaaa")
    const noodels= allproduct && allproduct.filter((el)=>el.Category==="noodels")
    console.log(noodels,"rrrrrrr")

    return(
    <>
   
    
   
    <div className="container-fluid  mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px",backgroundColor:"rgb(77, 148, 93)",marginTop:"10%",padding:"5px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3"style={{color:"white"}}>Noodels</h1>
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
                            <h2 className="section-title px-5"><span className="px-2">Noodels</span></h2>
                        </div>
                    <div className="container-fluid pt-5"style={{marginRight: "-15px",marginLeft: "-15px;"}}>
                        
                        {noodels && noodels.map(filteredCategory=> (
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

 export default Noodels