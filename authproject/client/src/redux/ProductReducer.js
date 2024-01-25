
import {GET_Product} from "./actionTypes"
const initState={
    product:[]
}

export const reducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_Product:
            return {...state,
                product:action.payload.product
            }
      
    
        default:
            return state
         
    }
}