import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import EditUser from '../auth/EditModal';
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'



function Dashboard() {

  const user=useSelector((state)=>state.auth.user)
console.log(user,"dachboardUser")
const dispatch=useDispatch()
const navigate=useNavigate()
const handleLogout=()=>{
  dispatch(logoutUser())
  navigate("/")
}
  return (
    <div style={{maxWidth:"950px",marginLeft:"auto",marginRight:"auto",width:"100%",display:"flex",flexWrap:"wrap",boxSizing: "border-box"}}>
    <div style={{flexBasis: "25%",maxWidth: "25%",minWidth: "25%",width: "25%",boxSizing: "border-box",paddingLleft: "8px",paddingRight:" 8px"}}>
      <nav className="s-menu" aria-labelledby="account-menu" style={{dispaly:"flex",flexDirection:"column",overflow: "hidden",borderRadius:"4px",boxShadow: "0 2px 5px 0 rgba(0,0,0,.05)",boxSizing: "border-box"}}>
      <a href="" className="m-itm _act _wic" id="account-menu"style={{fontWeight:"500px",paddingBottom: '12px',paddingTop: "12px",backgroundColor:" #d4d4d6",padding: "16px",alignItems: "center", display: "flex",color:"inherit"}}>
      <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
      <use href="">
      </use></svg>Votre compte</a>
      <a href="" className="m-itm -hr _wic"style={{fontWeight:"500px",paddingBottom: '12px',paddingTop: "12px",padding: "16px",alignItems: "center", display: "flex",color:"inherit"}}>
        <svg viewBox="0 0 24 24" className="ic" width="24" height="24"><use href="">
          </use></svg>Vos commandes</a>
          <a href="" className="m-itm _wic"style={{position:" relative",paddingBottom:" 12px",paddingTop: "12px",padding: "16px",alignItems: "center",display:"flex",color:"inherit"}}>
            <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
            <use href=""></use>
            </svg>Boîte de réception</a>
            <a href="" className="m-itm _wic" style={{position:" relative",paddingBottom:" 12px",paddingTop: "12px",padding: "16px",alignItems: "center",display:"flex",color:"inherit"}}>
              <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                <use href="">
                  </use>
                  </svg>Vos avis en attente</a>
                  <a href="" className="m-itm _wic" style={{position:" relative",paddingBottom:" 12px",paddingTop: "12px",padding: "16px",alignItems: "center",display:"flex",color:"inherit"}}>
                    <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                      <use href="">
                        </use></svg>Bons d'achat</a>
                        <a href="" className="m-itm _wic" style={{position:" relative",paddingBottom:" 12px",paddingTop: "12px",padding: "16px",alignItems: "center",display:"flex",color:"inherit"}}>
                          <svg viewBox="0 0 24 24" className="ic" width="24" height="24">
                            <use href="">
                              </use></svg>Votre liste d'envies</a>
                                <a href="" className="m-itm -hr _bot _wic" data-mi="lv"style={{position:" relative",paddingBottom:" 12px",paddingTop: "12px",padding: "16px",alignItems: "center",display:"flex",color:"inherit"}}>
                                  <svg viewBox="0 0 24 24" className="ic" width="24" height="24"><use href="">
                                    </use></svg>Vus récemment</a>
                                    <hr/>
                                    
                                    <a href="" className="m-itm"style={{position:"relative",fontWeight:"500px",paddingBottom: '12px',paddingTop: "12px",padding: "16px",alignItems: "center", display: "flex",color:"inherit"}}>Adresses</a>
                                    <a href="" className="m-itm"style={{position:" relative",paddingBottom:" 12px",paddingTop: "12px",padding: "5.5px",display:"flex",color:"inherit"}}>Préférences de communication</a>
                                    <a href="" className="m-itm" style={{position:" relative",paddingBottom:" 12px",paddingTop: "12px",padding: "16px",alignItems: "center",display:"flex",color:"inherit"}}>Fermer le compte</a>
                                    <hr/>
                                    <form method="get" className="-tac -hr -fs0 -pam" action="/customer/account/logout/"><button className="btn _def"style={{color:"green"}} onClick={handleLogout}>Déconnexion</button></form></nav>
    </div>
    <section style={{ flexBasis: "75%", maxWidth: "75%", minWidth: "75%", width: "75%",paddingLeft: "8px",paddingRight:" 8px",display: "block"}}>
      <div style={{height: "100%",boxShadow: "0 2px 5px 0 rgba(0,0,0,.05)",backgroundColor: "#fff",boxSizing: "border-box",bordeRadius:" 4px"}}>
        <header style={{paddingLeft: "16px",paddingBottom:" 8px",paddingRight: "16px",paddingTop: "8px",minHeight: "48px",display: "flex",borderBttom: "1px solid #f1f1f2",boxSizing: "border-box",}}>
          <h1 style={{fonSize: "1.25rem",textOverflow: "ellipsis",whiteSpace: "nowrap",fontWeight:" 500px"}}>Votre compte</h1>
          </header>
          <hr/>
          <div style={{padding:" 8px",maxWidth:" 950px",display:" flex",flexWrap: "wrap",width: "100%",marginLeft: "auto",marginRight: "auto"}}>
            <div style={{paddingBottom: "8px",paddingTop: "8px",flexBasis: "50%",maxWidth: "50%",minWidth: "50%",width: "50%",paddingLeft: "8px",paddingRight: "8px",boxSizing: "border-box",display: "block"}}>
              <article style={{borderRadius: "4px",boxSizing: "border-box",height: "100%",display: "flex",flexDirection: "column", border: "1px solid #d4d4d6",borderRadius: "4px",boxSizing: "border-box"}}>
                <header style={{alignItems:"center",justifyContent: "space-between",display: "flex",borderBottom: "1px solid #d4d4d6",}}>
                  <h2 style={{fontSize:"25px",textTransform:" uppercase",fontWeight: "500px",padding: "20px"}}>Informations personnelles</h2>
                  </header>
                  <div style={{padding:" 8px",flexGrow: "1",boxSizing:" border-box",display: "block"}}>
                    <p style={{fontSize: "1rem",paddingLeft:" 8px",paddingRight:" 8px",paddingTop: "8px",}}>{user && user.name} {user && user.lastName }</p>
                    <p style={{color: "#75757",wordBreak: "break-all"}}>{user && user.email}</p>
                    </div>
                    </article>
                    </div>
                    <div style={{paddingBottom: "8px",paddingTop: "8px",flexBasis: "50%",maxWidth: "50%",minWidth: "50%",width: "50%",paddingLeft: "8px",paddingRight: "8px",boxSizing: "border-box",display: "block"}}>
                      <article style={{borderRadius: "4px",boxSizing: "border-box",height: "100%",display: "flex",flexDirection: "column", border: "1px solid #d4d4d6",borderRadius: "4px",boxSizing: "border-box"}}>
                        <header style={{alignItems:"center",justifyContent: "space-between",display: "flex",borderBottom: "1px solid #d4d4d6"}}>
                          <h2  style={{fontSize:"25px",textTransform:" uppercase",fontWeight: "500px",padding: "20px"}}>Adresses</h2>
                          </header>
                          <div style={{padding:" 8px",flexGrow: "1",boxSizing:" border-box",display: "block"}}>
                          <p style={{fontSize: "1rem",paddingLeft:" 8px",paddingRight:" 8px",paddingTop: "8px"}}>Adresse par défaut :</p>
                          <div class="-gy5 -pvs -phm -n -tal">
                          <p>{user && user.name} {user && user.lastName }</p>
                          <p>{user && user.adresse}</p>
                          <p class="-ltr">{user && user.telephone}</p>
                          </div>
                          </div>
                    </article>
                  </div>
                  <EditUser el={user }style={{position:" relative",paddingBottom:" 12px",paddingTop: "12px",padding: "16px",alignItems: "center",display:"flex",color:"inherit"}}>
                  </EditUser>
                  <a href="/"style={{fontSize:"20px",marginLeft:"80%",color:"green"}}>back Home</a>
         </div>                                
        </div>                                   
    </section>
  
    </div>

  );
}
  

export default Dashboard
/*<section>
    <div>
    <Card style={{ width: '450px',height:"300px" ,marginTop:"5%",marginLeft:"5%"}}>
      
      <Card.Body >
        <Card.Title style={{fontSize:"50px"}}>{user && user.name} {user && user.lastName }</Card.Title>
        <Card.Text style={{fontSize:"25px"}}>
        </Card.Text>
      </Card.Body >
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{fontSize:"30px"}}>{user && user.email}</ListGroup.Item>
        
      </ListGroup>
      <Card.Body style={{display:"flex",justifyContent:"space-between",marginLeft:"35%",}}>
       
        <EditUser el={user} />
      
        <Card.Link href="/"style={{fontSize:"15px",marginTop:"10%"}}>back Home</Card.Link>
      </Card.Body>
    </Card>
    </div>
    </section>*/