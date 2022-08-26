import React,{useCallback, useEffect,useState ,}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart} from './../actions/cart';
import { Link } from 'react-router-dom';
import  Swal  from 'sweetalert2';



export const AddProductsCounter = ({item}) => {

    //BUG: LOGRAR QUE EL MENSAJE "SIN STOCK" SE LEA SI EL STOCK INICIA EN 0.
    
    const dispatch = useDispatch();
   

    const{cart} = useSelector(state => state.cart);

    const [counter, setCounter] = useState(1);
    const [stockAvaible , setStockAvaible] = useState(true); 
    const [limitToOrder , setlimitToOrder] =useState(); 


    useEffect(() => {
    
            if(item.stock===0){ 
                setStockAvaible(false);
            }
            
        

    }, []);
   

    //AGREGA productos al carro.
     const handleAdd = ()=>{
        
        const itemCopy = {
                ...item,
                cantidad:counter
            }
         dispatch(addToCart(itemCopy)); 
         setCounter(1);

         Swal.fire({
                title: 'Producto Añadido al Carro',
                allowOutsideClick:true,
                showConfirmButton: true,
              
               
            }); 
               
    }

    
    const inCart = (item)=> {
        const isIn = cart.find(prod => item.id === prod.id);
        return isIn;
    };

    //CONSULTA si el producto ya fue agregado al carro previamente.
    const checkItemOnCart = useCallback(() => inCart(item),[inCart, item]);

    //CHECKEA el stock disponible.
    useEffect(() => {
    
       const checkingStock =  checkItemOnCart(item) ;

        if(checkingStock!==undefined){
            
            if(checkingStock.cantidad === checkingStock.stock || checkingStock.stock === 0 ){ 
                setStockAvaible(false);
            }
            
        }

    }, [ handleAdd]);



    //SETEA el limite de compra en base a la cantidad solicitada y el stock disponible.
    const limitToBuy = useCallback(() => {
        
        const productCheck = checkItemOnCart();

            if( (productCheck?.cantidad + counter) === item.stock ) {
                setlimitToOrder(true)
            } else {
                setlimitToOrder(false)
            }
            
    },[counter, checkItemOnCart, item.stock]); 


    
     useEffect(() => {

        limitToBuy ();

    }, [checkItemOnCart, limitToBuy]);

            return (
                <>  
                    <div className='row'>
                        <div>
                        <   button onClick = { ()=> setCounter(counter-1) }
                                className="btnAddOff" disabled={ counter <= 1 || !stockAvaible}><p>-</p></button>
                                <span style={{fontSize: '1.3em'}}>{!stockAvaible ? "Sin Stock" : counter}</span>
                            <button onClick = { ()=> setCounter(counter+1) }
                                    className="btnAddOff" disabled={ counter >= item.stock || limitToOrder || !stockAvaible }>
                                <p>+</p>
                            </button>
                            </div>
                            <div>
                                <button className='btnCustom' onClick={handleAdd} disabled={!stockAvaible} > AGREGAR</button>
                                
                                <button className='btnCustom' > <Link className='btnCustom' to="/cart">IR AL CARRO</Link> </button>
                                
                                </div>  
                        </div>
            
                </>
            )
                    
}

