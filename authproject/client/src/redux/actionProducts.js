import { GET_Product } from "./actionTypes"
import axios from "axios"


export const getProduct=()=>async(dispatch)=>{
try{
    const res=await axios.get("http://localhost:5001/api/product/get")
    console.log(res,"ressssssssssssssssss")
    dispatch({type:GET_Product,payload:res.data})

}
catch(error){

    console.log(error)
}



}
/*export const getPasta=()=>(dispatch)=>{
    axios.get("http://localhost:5001/api/product/getPasta")
    .then((res)=>dispatch({type:GET_Product,payload:res.data}))
    .catch((err)=>console.log(err))
    }
export const getBreads=()=>(dispatch)=>{
        axios.get("http://localhost:5001/api/product/getBreads")
        .then((res)=>dispatch({type:GET_Product,payload:res.data}))
        .catch((err)=>console.log(err))
        }
export const getNoodels=()=>(dispatch)=>{
    axios.get("http://localhost:5001/api/product/getNoodels")
    .then((res)=>dispatch({type:GET_Product,payload:res.data}))
    .catch((err)=>console.log(err))
            }
export const getchocolat=()=>(dispatch)=>{
    axios.get("http://localhost:5001/api/product/getChocolat")
    .then((res)=>dispatch({type:GET_Product,payload:res.data}))
    .catch((err)=>console.log(err))
                }
export const getRice=()=>(dispatch)=>{
    axios.get("http://localhost:5001/api/product/getRice")
    .then((res)=>dispatch({type:GET_Product,payload:res.data}))
     .catch((err)=>console.log(err))
                    }
export const getDrink=()=>(dispatch)=>{
    axios.get("http://localhost:5001/api/product/getDrink")
    .then((res)=>dispatch({type:GET_Product,payload:res.data}))
     .catch((err)=>console.log(err))
                        }*/
export const deleteProduct=(idProduct)=> async (dispatch)=>{
    try{
        const config={
            headers: {
                'x-auth': localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data',
                
              }
        
            }
       const res = await axios.delete(`http://localhost:5001/api/product/delete/${idProduct}`,config)
       dispatch(getProduct())
    }
    
 catch(error){
    console.log(error)
 }
  
}

export const addProduct=(formData)=>async (dispatch)=>{
    
  
      
        try{
            const config={
                headers: {
                    'x-auth': localStorage.getItem('token'),
                    
                    
                  }
            
                }
        const res=  await axios.post("http://localhost:5001/api/product/add",formData,config)
        console.log(formData,"....")
        dispatch(getProduct())
           
        }
        catch(error){

            console.log(error)
        }
        
      
}

export const editProduct=(idProduct,editedProduct)=>(dispatch)=>{

    axios.put(`http://localhost:5001/api/product/edit/${idProduct}`,editedProduct)
    ((res)=>dispatch(getProduct()))
    .catch((err)=>console.log(err))
}