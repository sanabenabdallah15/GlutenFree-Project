import {useState} from 'react'
import ReactModal from 'react-modal';
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { editUser } from '../../redux/actions';
import img from "../pages/img/Rectangle 6.png"
import img1 from"../pages/img/Rectangle 1.jpg"
ReactModal.setAppElement(document.getElementById('root'));
function EditUser({el}) {
    let[isOpen,setIsOpen]=useState(false)
    const[name,setName]=useState(el && el.name)
    console.log(name,"sanaaaa")
    const[lastName,setlastName]=useState(el && el.lastName)
    console.log(lastName,"2")
    const[email,setEmail]=useState(el && el.email)
    const[adresse,setAdresse]=useState(el && el.adresse)
    const[telephone,setTelephone]=useState(el && el.telephone)

    
const handleModal=()=>{
 
    setIsOpen(!isOpen)
}
const dispatch=useDispatch()
const navigate=useNavigate()
const isAuth=useSelector((state)=>state.auth.isAuth)
const errors=useSelector((state)=>state.auth.err)
const editHanlder=()=>{
    const editedData={name,lastName,email,adresse,telephone}
    console.log(editedData,"helloooo")
    
dispatch(editUser(el._id,editedData,navigate))

  handleModal()


}

  return (
    <div>
        <button onClick={handleModal} style={{height:"50px",width:"150px",backgroundColor:"green",color:"white"}}>Gerer votre compte</button>
  
       <ReactModal
      

style={{width:"200px",height:"500px"}}
isOpen={isOpen}
>
<div style={{display:'flex'}}>
    <img  src={img1}style={{height:"10%"}}></img>
    <div style={{marginTop:"5%",marginLeft:"5%",width:"700px",display:"flex",flexDirection:"column"}}>
    <img  src={img} style={{height:"400px", width:"400px",marginLeft:"20%"}}></img>

    <label  >Name</label>
    <input  value={name} onChange={(e)=>setName(e.target.value)} style={{fontSize:"25px"}} />
    <label>lastName</label>
    <input onChange={(e)=>setlastName(e.target.value)} value={lastName}style={{fontSize:"25px"}} />
    <label>email</label>
    <input onChange={(e)=>setEmail(e.target.value)} value={email} style={{fontSize:"25px"}}/>
    <label>Adreese</label>
    <input onChange={(e)=>setAdresse(e.target.value)} value={adresse}style={{fontSize:"25px"}}  />
    <label>Telephone</label>
    <input onChange={(e)=>setTelephone(e.target.value)} value={telephone} style={{fontSize:"25px"}}/>
    <div style={{display:"flex"}}>
    <button onClick={editHanlder} style={{justifyContent: "center", alignItems: "center",margin: "10px 20px",width:"25%", height: "50px",borderRadius: "10px",backgroundColor: "#3A8A3A",color:"white"}}>SUBMIT</button>
    <button onClick={handleModal} style={{justifyContent: "center", alignItems: "center",margin: "10px 20px",width:"25%", height: "50px",borderRadius: "10px",backgroundColor: "#3A8A3A",color:"white"}}>CLOSE</button>
    </div>
     </div>
   </div> 
</ReactModal>
    </div>
  )
}

export default EditUser
/*<div style={{display:'flex'}}>
    <img  src={img1}style={{height:"10%"}}></img>
    
   <Form style={{marginTop:"5%",marginLeft:"5%",width:"700px"}}>
    <img  src={img} style={{height:"300px"}}></img>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
        <Form.Control  placeholder="name" onChange={(event)=>setName(event.target.value)} style={{padding:"10px",}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     
        <Form.Control placeholder="LastName" onChange={(event)=>setlastName(event.target.value)} style={{padding:"10px",fontSize:"25px"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
    
        <Form.Control placeholder="Email" onChange={(event)=>setEmail(event.target.value)} style={{padding:"10px",fontSize:"25px"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
    
        <Form.Control as="textarea" rows={3} placeholder="Adresse" onChange={(event)=>setAdresse(event.target.value)}style={{padding:"10px",fontSize:"25px"}} />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        
        <Form.Control type="file" placeholder="Phone Number" onChange={(event)=>setTelephone(event.target.value)}style={{padding:"10px",fontSize:"25px"}}/>
      </Form.Group>
      <button onClick={handlerProduct}style={{justifyContent: "center", alignItems: "center",padding: "0 20px",width:"25%", height: "50px",borderRadius: "10px",backgroundColor: "#3A8A3A",color:"white"}}>Submit</button>
      <span class="txt2">
		 <a href="/" style={{color: "#3A8A3A;"}}> Back Home</a> 
	    </span>
    </Form>
    </div>*/