/*import React ,{useState}from 'react'
import {Alert,Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input} from "reactstrap"
import { registeUser } from '../../redux/actions'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
function RegisterModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[name,setName]=useState("")
  const[lastName,setLastName]=useState("")
  const[password,setPassword]=useState("")
  const[adresse,setAdresse]=useState("")
  const[telephone,setTelephone]=useState("")

  const toggle=()=>{
    setModal(!modal)
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()
const isAuth=useSelector((state)=>state.auth.isAuth)
  const errors=useSelector((state)=>state.auth.err)
console.log(errors,"hellllo")
console.log(isAuth,"kkkkkkkkk")
  const handleRegister=()=>{
     
    const formdata={name,email,password,lastName,telephone,adresse}
    dispatch(registeUser(formdata,navigate))

 if (isAuth ===true){
toggle()
 }

  }

  

  return (
    <div>
         <Button style={{backgroundColor:"white",color:"green",width:"150px",borderColor:"black",marginLeft:"930%",}} onClick={toggle}>
register      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>

          <InputGroup>
    <Input placeholder="name" onChange={(event)=>setName(event.target.value)} />
  </InputGroup>
  <InputGroup>
    <Input placeholder="lastName" onChange={(event)=>setLastName(event.target.value)}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="email" onChange={(event)=>setEmail(event.target.value)} />
    <InputGroupText>
      @example.com
    </InputGroupText>
  </InputGroup>
  <InputGroup>
    <Input placeholder="password" type='password' onChange={(event)=>setPassword(event.target.value)}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="adresse"  onChange={(event)=>setAdresse(event.target.value)}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="telephone"  onChange={(event)=>setTelephone(event.target.value)}/>
  </InputGroup>
  <InputGroup>


{errors && (
                <Alert color="danger">
                  {errors.map((err) => (
                    <div >{err.msg}</div>
                  ))}
                </Alert>
              )}
</InputGroup> 
<Checkbox
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleRegister}>
            register
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default RegisterModal*/
import React, { useState } from 'react';
import { Alert, Modal, ModalBody, ModalHeader, ModalFooter, Button, InputGroup, InputGroupText, Input } from 'reactstrap';
import { registeUser } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function RegisterModal() {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Added state for checkbox

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const errors = useSelector((state) => state.auth.err);

  const handleRegister = () => {
    const formData = { name, email, password, lastName, telephone, adresse, role: isAdmin ? 'admin' : 'user' }; // Added role based on checkbox state
    dispatch(registeUser(formData, navigate));

    if (isAuth === true) {
      toggle();
    }
  };

  return (
    <div>
      <Button style={{ backgroundColor: 'white', color: 'green', width: '150px', borderColor: 'black', marginLeft: '930%' }} onClick={toggle}>
        Register
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
    <InputGroup>
    <Input placeholder="name" onChange={(event)=>setName(event.target.value)}style={{marginBottom:"15px",width:"50px"}}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="lastName" onChange={(event)=>setLastName(event.target.value)}style={{marginBottom:"15px",width:"50px"}}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="email" onChange={(event)=>setEmail(event.target.value)}style={{marginBottom:"15px",width:"50px"}} />
    <InputGroupText style={{marginBottom:"15px"}}>
      @example.com
    </InputGroupText>
  </InputGroup>
  <InputGroup>
    <Input placeholder="password" type='password' onChange={(event)=>setPassword(event.target.value)}style={{marginBottom:"15px",width:"50px"}}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="adresse"  onChange={(event)=>setAdresse(event.target.value)}style={{marginBottom:"15px",width:"50px"}}/>
  </InputGroup>
  <InputGroup>
    <Input placeholder="telephone"  onChange={(event)=>setTelephone(event.target.value)}style={{marginBottom:"15px",width:"50px"}}/>
  </InputGroup>
  <InputGroup>


{errors && (
                <Alert color="danger">
                  {errors.map((err) => (
                    <div >{err.msg}</div>
                  ))}
                </Alert>
              )}
</InputGroup> 

          <InputGroup>
          <InputGroup>
            <input type="checkbox" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} aria-label="controlled" />
            <label style={{marginLeft:"10px"}}>are you a seller ?</label>
          </InputGroup>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleRegister}style={{backgroundColor:"green"}}>
            register
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      
      </Modal>
    </div>
  );
}

export default RegisterModal;

