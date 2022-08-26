import { types } from "../types/types";
import {db} from '../firebase/firebase-config';




export const addToOrders = (order)=>({
    type: types.addToOrders,
    payload: order
    
}  );

export const addToOrderListFirebase = (order) =>{
    
    // order.forEach(it =>{
    //     delete it.desc
    // })

   
    return async ()=>{
         
        //console.log("ORDER: "+ JSON.stringify(order[0]))
       await db.collection(`/ordenes`).add(order);
      // dispatch(addNewProduct(doc.id, newProd));
       
    }
}


export const startUpdatingStock = (id, newStock) => {
    
    return async () =>{

        await db.collection('productos').doc(id).update({stock: newStock});

    }
}
