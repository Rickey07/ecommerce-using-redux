import { actionTypes } from "../constants/action-types";
const initialState = {
    products:[
        {
          id:1,
          title:"Prabadhya",
          category:"Prabadhya"  
        }
    ]
}
export const productReducer = (state,{type,payload}) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}   