

export const duplicated=(cart, item, dup)=>{

             const indexDuplicated = cart.findIndex(cart => cart.id === item.id);

             const objCopy={
                 ...item,
                 cantidad: item.cantidad += dup.cantidad  
             }

             if(objCopy.cantidad <= objCopy.stock){
                   console.log("Added" )
                 cart.splice(indexDuplicated, 1,{ ...objCopy});

             }else{

                 console.log("Not Added" )
             }
            

     }