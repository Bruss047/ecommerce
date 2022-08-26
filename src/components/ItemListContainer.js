//Hooks
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { ItemList } from './ItemList';
import {  useSelector } from 'react-redux';
import { Oval } from  'react-loader-spinner';







export const ItemListContainer = () => {

    //const {categoryId} = useParams(); //Categoria definida en ruta para saber que productos filtrar

      
    const [loading, setLoading] = useState(true);
 
    const {products} = useSelector(state => state.products);
    
    useEffect(()=>{
        products.length > 0 && setLoading(false)  
    },[products])
    
    if(loading){
        return(
            
         <>
            <div className="container_loading col-4"> 
              <div className='divLoading col-6'>
                  <Oval
                  ariaLabel="loading-indicator"
                  height={250}
                  width={260}
                  strokeWidth={4}
                  color="red"
                  secondaryColor="yellow"
                />
              </div>
            </div>
         </>
        )
    }else{

          return( 
              <>
                
                <div className="container"> 
                  <h1 style={{color:"black", textAlign:"center", margin:"1.2%"}}>Productos</h1>   
                      <ItemList items={products} />
                  </div>
                <div>

                </div>
                </>   
            )

    }

   
    
}

