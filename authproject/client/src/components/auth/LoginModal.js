import React ,{useState}from 'react'
import {Alert,Modal,ModalBody,ModalHeader,ModalFooter,Button,InputGroup,InputGroupText,Input} from "reactstrap"
import { loginUser, registeUser } from '../../redux/actions'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
function LoginModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const toggle=()=>{
    setModal(!modal)
  }
  const errors=useSelector((state)=>state.auth.err)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    const formdata={email,password}
    dispatch(loginUser(formdata,navigate))


  }
  return (
    <div>
         <Button style={{backgroundColor:"green",width:"150px",borderColor:"black",marginLeft:"950%"}} onClick={toggle}>
Login      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
  <InputGroup>
    <Input placeholder="email"  onChange={(event)=>setEmail(event.target.value)} style={{marginBottom:"15px",width:"50px"}} />
    <InputGroupText style={{marginBottom:"15px"}}>
      @example.com
    </InputGroupText>
  </InputGroup>
  <InputGroup>
    <Input placeholder="password" type='password' onChange={(event)=>setPassword(event.target.value)} style={{marginBottom:"15px",width:"50px"}}/>
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
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleLogin} style={{backgroundColor:"green"}}>
Login          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}

export default LoginModal


