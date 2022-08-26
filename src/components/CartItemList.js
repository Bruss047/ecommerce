import React from 'react';
import { deleteFromCart } from '../actions/cart';
import { useDispatch } from 'react-redux';


export const CartItemList  = ({item}) => {

  const dispatch = useDispatch();

  const handleDelete =(item)=>{

      dispatch(deleteFromCart(item));
      
  }
  
  return (
      
    <>    
          <div className="cart-item">
                
                <div >
                </div>
                <div className="item-name item">
                   <h2>{item.nombre}</h2> 
                </div>
                <div className="item-quantity item">
                  <h4> Cantidad: {item.cantidad} </h4>
                </div>
                 <div className="item-quantity item">
                    <h4> Precio: $ {item.precio} </h4>
                </div>
                <div className="item-quantity item">
                    <h4> Total: $ {item.cantidad * item.precio} </h4>
                </div>
              <button className='deleteButton' onClick={()=>handleDelete(item)}>Quitar</button>
            </div>
            
            <hr/> 
    </>
  )
}
