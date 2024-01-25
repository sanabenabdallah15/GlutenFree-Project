import { ERRORS, GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER,Get_Dashboard_User,Edit_User } from "./actionTypes"
import axios from "axios"
export const registeUser=(formdata,navigate)=>async(dispatch)=>{
try{
const res=await axios.post("http://localhost:5001/api/auth/register",formdata)
dispatch({type:REGISTER_USER,payload:res.data})
navigate("/")
}
catch(err){
    console.log(err)
    console.dir (err)
const {errors,msg}=err.response.data

/*if(Array.isArray(errors)){
    errors.forEach((err)=>alert(err.msg))
}*/
dispatch({
    type:ERRORS,
    payload:errors
})

}

}
export const loginUser=(formdata,navigate)=>async(dispatch)=>{
    try{
    const res=await axios.post("http://localhost:5001/api/auth/login",formdata)
    dispatch({type:LOGIN_USER,payload:res.data})
    navigate("/")
    }
    catch(err){
        console.log(err)
        console.dir (err)
    const {errors,msg}=err.response.data
    
    /*if(Array.isArray(errors)){
        errors.forEach((err)=>alert(err.msg))
    }*/
    dispatch({
        type:ERRORS,
        payload:errors
    })

    }
    
    }


// get auth user
export const getAuthUser=()=>async(dispatch)=>{
try {
const config={
    headers: {
        'x-auth': localStorage.getItem('token'),
      }

}

const res=await axios.get("http://localhost:5001/api/auth/user",config)
dispatch({
    type:GET_AUTH_USER,
    payload:res.data
})
}
catch(err){
    console.log(err)
}
}

export const logoutUser=()=>(dispatch)=>{

dispatch({
    type:LOGOUT_USER
})
}
export const  Dashboard=()=>(dispatch)=>{
    dispatch({
        type:Get_Dashboard_User
    })
}

export const editUser = (userId, formData,navigate) => async (dispatch) => {
console.log(formData,"ccccccccccccccccc")

    try {

        const config={
            headers: {
                'x-auth': localStorage.getItem('token'),
              }
        
        }
        

      const res = await axios.put(`http://localhost:5001/api/auth/edit/${userId}`,formData,config);
      dispatch(getAuthUser());
      navigate("/Dashboard")

    } catch (err) {
      console.log(err);
      console.dir(err);
    
    }
  };



