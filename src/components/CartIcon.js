import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";


export const CartIcon = () => {

    const {cart}=useSelector(state=> state.cart);
    let itemsIncart=0;
    
    if(cart.length > 0 ){

        itemsIncart = cart.reduce( (acum, prod) => acum + prod.cantidad, 0 );
         
    }


  return (
        <>  
            <div className = "cartwidget-container" >        

                      <Badge overlap="rectangular" color="secondary" badgeContent={itemsIncart}>
                        <Link to="/cart" >  
                        <ShoppingCartIcon style={{ fontSize: 30 }}/>{" "}
                        </Link>
                        </Badge>
              
            </div>
        </>
    )


}
