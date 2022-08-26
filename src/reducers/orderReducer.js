import { types } from './../types/types';


const initialState = { 

    orders: [],
    
}

export const orderReducer = (state = initialState, action) => {
    
    //const {cart} = state;

    switch (action.type) {

        case types.addToOrders:
      
         return {
                 ...state,
                orders: [...action.payload]       
             }
        
        //case types.updateStockFirebase:
           // case types.deleteFromCart:


            // return {
            //     ...state,
            //     cart: cart.filter(product => product !== action.payload)

            // }
  
        default:
            return state;
    }
    }