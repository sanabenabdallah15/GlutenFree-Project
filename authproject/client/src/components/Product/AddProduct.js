import { useState,useSelector } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actionProducts';
import { useNavigate } from 'react-router-dom'
import img from "../pages/img/Rectangle 6.png"
import img1 from"../pages/img/Rectangle 1.jpg"
function AddProduct() {
    const [nameProduct,setName]=useState('');
    console.log(nameProduct,"Nameproduuuuuuuuuuuuuuuct")
    const [Category,setCategory]=useState('');
    const [Price,setPrice]=useState('');
    const [Description,setDescription]=useState('');
 
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handlerProduct=(event)=>{
      event.preventDefault();
      const  formData =  {nameProduct,Category,Price,Description};
      console.log(formData,"ccccccccccccccccccccccccccc")
      
    
      dispatch(addProduct(formData));
      navigate("/");
}
  return (
    <>
     <div style={{display:'flex'}}>
    <img  src={img1}style={{height:"10%"}}></img>
    
   <Form style={{marginTop:"5%",marginLeft:"5%",width:"700px"}}>
    <img  src={img} style={{height:"300px"}}></img>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
        <Form.Control  placeholder="name" onChange={(event)=>setName(event.target.value)} style={{padding:"10px",fontSize:"25px"}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     
        <Form.Control placeholder="category" onChange={(event)=>setCategory(event.target.value)} style={{padding:"10px",fontSize:"25px"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
    
        <Form.Control placeholder="price" onChange={(event)=>setPrice(event.target.value)} style={{padding:"10px",fontSize:"25px"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
    
        <Form.Control as="textarea" rows={3} placeholder="description" onChange={(event)=>setDescription(event.target.value)}style={{padding:"10px",fontSize:"25px"}} />
      </Form.Group>
     
      <button onClick={handlerProduct} style={{ justifyContent: "center", alignItems: "center", padding: "0 20px", width: "25%", height: "50px", borderRadius: "10px", backgroundColor: "#3A8A3A", color: "white" }}>Submit</button>
          <span className="txt2">
            <a href="/" style={{ color: "#3A8A3A;" }}> Back Home</a>
          </span>
    </Form>
    </div>
	
	

 
    </>
  );
}

export default AddProduct;