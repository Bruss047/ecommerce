import React, { useState, useEffect } from 'react';
import { AddProductsCounter } from './AddProductsCounter';

import { Oval } from  'react-loader-spinner';
import { Link } from 'react-router-dom';




export const ItemDetail = ({item}) => {
 

  
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
      
        if(item.id!==undefined){
            setLoading(false);
              
        }

    },[item])

  
    if(loading){

        return(
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
            )
    }else{
        return (
        <div className="container col-12 itemDetailContainer">
            
                    <div className="inneritemDetailContainer col-12 col-md-8">

                        <h1>{item.nombre}</h1>
                        <div className="container-two">
                            <div className="title-price">
                                <img className='img-fluid mb-4' src={item.url} height={230} width={230} alt="producto"></img>
                                
                                <h3 >Precio: ${item.precio}</h3>
                                <h4>Descripción:</h4>
                                <div className='col-6 productDesc'> {item.desc} </div>
                                <h4 style={{color:"green"}}>Stock: {item.stock}</h4>
                            </div>  
                          <AddProductsCounter item={item}/>       
                      </div>
                     
                    </div>
               <button className='btnSeguirComprando'>  <Link className='btnSeguirComprando' to="/"> Seguir Comprando </Link> </button>
        </div>
        )

    
    
                }


}

