import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItemList } from './CartItemList';

export const Cart = () => {

    const {cart} = useSelector(state => state.cart);
    const subTotal = cart.reduce( (acum, prod) => acum + prod.precio * prod.cantidad, 0 );
 

  return (

   <>
          <div className='cartListContainer'>
            {cart.map( product=>
                    <CartItemList key={product.id} item={product}/>
                )}
              { (subTotal>0)
                &&
                <h2 style={{color:"lightgreen"}}>SUBTOTAL: ${subTotal}</h2>  
              }
              { (!subTotal>0)
                &&
                <h2> <p className='textAlingCenter'>carrito vacio</p> </h2>  
              }
            <hr/>
            {
              subTotal>0
              ? <Link className='btnCustom border' to="/order">Finalizar Compra</Link>
              : <Link className='btnCustom border' to="/order" onClick={ (event) => event.preventDefault() }>Finalizar Compra</Link>

            }
               
          </div>
           </>
  )
}
