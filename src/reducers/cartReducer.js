import { types } from './../types/types';
import { duplicated } from '../helpers/duplicatedProduct';


const initialState = { 

    cart: [],
    
}

export const cartReducer = (state = initialState, action) => {
    
    const {cart} = state;

    switch (action.type) {

        case types.addToCart:
      
        const duplicate = cart.find(cart => cart.id === action.payload.id);
        
            if( duplicate !== undefined ){

                duplicated(cart, action.payload, duplicate)

                return {
                 
                 ...state,
                cart: [...cart]       
             }

            }else{
              
                return{
                ...state,
                cart: [ action.payload, ...state.cart ]  
            }

            }

            case types.deleteFromCart:


            return {
                ...state,
                cart: cart.filter(product => product !== action.payload)

            }

            case types.resetCart:

            return{

                ...state,
                cart: []

            }


     
        default:
            return state;
    }
    }