
import { types } from './../types/types';


const initialState = {
    
    products: [],
    active:null,

}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.loadProducts:
         
            return{
                ...state,
                products: [...action.payload] 
                
            }

        case types.addProduct:
         
            return{
                ...state,
                products: [action.payload, ...state.products] 
                
            }
        
    
        default:
            return state;
    }
}