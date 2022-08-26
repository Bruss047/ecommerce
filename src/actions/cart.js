import { types } from './../types/types';


export const addToCart = (item)=>({
    type: types.addToCart,
    payload: item
    
});

export const deleteFromCart = (item)=>({
    type: types.deleteFromCart,
    payload: item
});

export const resetCart = ()=>({
    type: types.resetCart
    
});

