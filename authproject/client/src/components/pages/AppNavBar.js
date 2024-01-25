import React ,{useState,Fragment}from 'react'
import {Navbar,NavbarBrand,Container,Nav,Collapse,NavbarToggler,NavItem,NavLink} from "reactstrap"
import LoginModal from '../auth/LoginModal'
import RegisterModal from '../auth/RegisterModal'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import img from "./img/gluten1.png"
import Dashboard from './Dashboard'
import AddProduct from '../Product/AddProduct'

function AppNavBar() {
    const [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)

    }


    const user=useSelector((state)=>state.auth.user)
console.log(user)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleLogout=()=>{
    dispatch(logoutUser())
    navigate("/")

}
const handleDashboard=()=>{
  dispatch(Dashboard())
  navigate("/Dashboard")
}
    const guestLinks = (
        <>
          <NavItem>
            <RegisterModal />
          </NavItem>
          <NavItem>
            <LoginModal />
          </NavItem>
        </>
      );

      const authLinks = (
        <Fragment style={{display:"inline",justifyContent:"space between",marginLeft:"280px",}}>
          <NavItem>
            <NavLink   >
              <div className="navbar-text mr-3" style={{marginLeft:"1200px",marginTop:"22px"}} >
              <Link to="/Dashboard"onClick={handleDashboard} style={{color:"white",textDecoration:"none"}}>
              <h3> welcome</h3>
              </Link>
              </div>
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  >
              <div className="navbar-text mr-3" >
                <Link to="/AddProduct"style={{textDecoration:"none"}}>
           <h3 style={{fontSize:"25px",color:"white",marginTop:"20%",marginLeft:"50%"}}> AddProduct </h3>
           </Link>
              </div>
              </NavLink>
          </NavItem>
          <NavItem>
          <NavLink   href="#" onClick={handleLogout} >
     
          <h2 className="navbar-text mr-3" style={{color:"white",marginLeft:"100px",fontSize:"25px",marginTop:"15%"}} > Logout</h2> 
       
          </NavLink>
          </NavItem>
          
        </Fragment>
      );
  return (
    <div>
    <Navbar style={{backgroundColor: "#4d945d",paddingBottom:"20px",paddingRight:"100%"} } expand="sm" >
      <img style={{height:"100px",width:"150px"}}src={img}></img>
      <Container>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          {user && user ? authLinks: guestLinks}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default AppNavBar
