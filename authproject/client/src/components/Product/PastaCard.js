import React from 'react'
import img1 from "../pages/img/Pasta 1.png"
import { useDispatch, useSelector } from "react-redux";
import {deleteProduct } from "../../redux/actionProducts";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartAction";
import ShoppingCart from './ShoppingCard';

function PastaCard({filteredCategory}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const deleteProd = () => {
        
          dispatch(deleteProduct(filteredCategory._id));
    }
    
      const handleAddToCart = () => {
        dispatch(addToCart());
        navigate('/ShoppingCart')
      };
   
  return (
    <>
         
                        
                            
                        <div >
                             <div >
                                <div >
                                     <div >
                                        <img  src={img1} alt="" style={{width:"90%"}}/>
                                    </div>
                                <div>
                                    <h4 >{filteredCategory.nameProduct}</h4>
                                    <div >
                                     <h6 >{filteredCategory.Price}</h6>
                                    </div>
                                </div>
                                <div >
                                  
                                   <button  onClick={handleAddToCart} style={{justifyContent: "center", alignItems: "center",margin: "10px 20px",width:"50%", height: "50px",borderRadius: "10px",backgroundColor: "#3A8A3A",color:"white"}}>Add To Cart</button>
                                
                                    <button  onClick={deleteProd}  style={{justifyContent: "center",alignItems: "center",margin: "10px 20px",width: "50%",height: "50px", borderRadius: "10px",backgroundColor: "#3A8A3A",color: "white"}} >Delete </button>
        
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
      
    </>
  )
}

export default PastaCard
