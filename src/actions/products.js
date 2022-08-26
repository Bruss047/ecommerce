
import {db} from '../firebase/firebase-config';
import { types } from './../types/types';




export const LoadingProducts = async () => {

   // setLocalCart();
    const productSnap = await db.collection('productos').get();
    const products = [];

    productSnap.forEach(snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return products;
}


export const setProducts = (items)=>({
    type: types.loadProducts,
    payload: items
})



export const startLoadingItems =()=>{
    return async (dispatch)=>{
         const items = await LoadingProducts();
         dispatch(setProducts(items));
    }
};


export const startNewProduct = (newProd) =>{
    
    return async (dispatch)=>{
       const doc = await db.collection(`/productos`).add(newProd);
       dispatch(addNewProduct(doc.id, newProd));
       
    }
}

export const addNewProduct = (id, prod) => ({
    type: types.addProduct,
    payload: {
        id, 
        ...prod
    }
})



 