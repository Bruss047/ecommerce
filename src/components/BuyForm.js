import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from './../customHook/useForm';
import { addToOrderListFirebase, addToOrders, startUpdatingStock } from './../actions/orders';
import { resetCart } from './../actions/cart';

export const BuyForm = () => {

  const {cart} =useSelector(state => state.cart);
  let textOrder="";

  const dispatch = useDispatch();

  const subTotal = cart.reduce( (acum, prod) => acum + prod.precio * prod.cantidad, 0 );

  const [buyFormValues, handleInputChange] = useForm({
      nombre:"",
      email:"",
      direccion:"",
      telefono:""
  });
 
  const {nombre, email, direccion, telefono} = buyFormValues;




  const handleOrder = (e) =>{
        e.preventDefault(); 
        let obj= cart.map(({ desc, url, ...product }) => product); //se borra la descripción y la url para que no figure en las ordenes.
       
        dispatch(addToOrders([buyFormValues, obj])); 
        dispatch(addToOrderListFirebase({clienteData:buyFormValues, obj})); //{clienteData:buyFormValues,...cart}
        textOrder+=`*Datos del Comprador:*%0a*Nombre*: ${nombre}.%0a*Email*: ${email}.%0a*Dirección*: ${direccion}.%0a*Telefono*: ${telefono}%0a%0a`;

        cart.forEach(item =>{
            let newStock = item.stock-item.cantidad;

            textOrder+=`*Pedido:*%0a*Producto*: ${item.nombre}.%0a*Cantidad*: ${item.cantidad}.%0a*Stock Restante*: ${item.stock}.%0a%0a`
            dispatch(startUpdatingStock(item.id, newStock));
           
        });
        textOrder+=`%0a*Total*: $${subTotal}`;
        
        dispatch(resetCart());
        redirectWhatApp();
  }

  const redirectWhatApp=()=>{
        window.location.href=`https://api.whatsapp.com/send?phone=+541139524071&text=${textOrder}`;
        }

  return (
      <>
        <div className="container buyFormContainer col-md-6">
                <div className="">
                    <div className="">
                        <h3>Finalizar Compra</h3>
                        <form onSubmit={handleOrder}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre y Apellido"
                                    name="nombre"
                                    required
                                    value={nombre}
                                    onChange={handleInputChange}
                                
                                />
                            </div>
                        
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={handleInputChange}
                                
                                />
                            </div>
                            

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Dirección" 
                                    name="direccion"
                                    required
                                    value={direccion}
                                    onChange={handleInputChange}
                                
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Telefono - Celular" 
                                    name="telefono"
                                    required
                                    value={telefono}
                                    onChange={handleInputChange}
                                
                                />
                            </div>

                           <h3 className="subTotal" style={{color:"black"}}> SUBTOTAL: ${subTotal}</h3> 
                            <div className="form-group btnComprarContainer">
                                {   
                                    subTotal>0
                                    ? <input 
                                    type="submit" 
                                    className="btnSubmit btnComprar" 
                                    value="Comprar" />
                                    :<h3>Carro Vacio</h3> 

                                }
                               
                            </div>
                        </form>
                    <p className='textAlingCenter '>* Se te redireccionará a WhatsApp para contactar al vendedor con tu pedido listo.</p>
                    </div>
                </div>
            </div>
     </>

  )
}
