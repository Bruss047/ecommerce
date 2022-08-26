import React, {useState } from 'react';
import  Swal  from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useForm } from '../customHook/useForm';
import { startLogout } from '../actions/auth';
import { startNewProduct } from '../actions/products';
import { imageUpload } from '../helpers/imageUpload';



export const UploadProduct = () => {

    const dispatch = useDispatch();
  
    const [url, setUrl] = useState("");

    
    const [formValues, handleInputChange] = useForm({
      nombre:"",
      cantidad:0,
      desc:"",
      precio:0,
      stock: 0,
    });

   const {nombre, precio, stock, desc} = formValues;

  
    const handleLogOut=()=>{
        dispatch(startLogout());
    }

    const handleAddNew = (e) =>{
         e.preventDefault();
        
         const product ={
                ...formValues,
                precio: Number(formValues.precio),
                stock: Number(formValues.stock),
                url: url
              
            }
        console.log(JSON.stringify(product)+" !!!")
         
       dispatch(startNewProduct(product));
       
        Swal.fire({
                title: 'Producto Añadido',
                // text: 'Por favor espere.',
                allowOutsideClick:true,
                showConfirmButton: true,
               
            }); 
       
       
    }


    const handlePictureClick = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = async (e) =>{
            
           const file = e.target.files[0];

           try {

                Swal.fire({
                title: 'Cargando...',
                text: 'Por favor espere.',
                allowOutsideClick:false,
                showConfirmButton: false,
                
                willOpen: () => {
                    Swal.showLoading();
                    
                }
            
            }); 

               const pic = await imageUpload(file);
               
               Swal.close();

               setUrl(pic);

               

           } catch (error) {
               console.log(error)
               Swal.close();
           }
         
    }

  return (

    <div className='col-8 mx-auto'>
        <h2 className='textAlingCenter'> Cargar Producto </h2>

        <form onSubmit={handleAddNew}>
                            <div className="form-group">
                               Producto: <input
                                    type="text"
                                    className="form-control"
                                    placeholder="producto"
                                    required
                                    name="nombre"
                                    value={nombre}
                                    onChange={handleInputChange}
                                
                                />
                            </div>
                        
                            <div className="form-group">
                                Precio:<input
                                    type="number"
                                    className="form-control"
                                    placeholder="precio"
                                    required
                                    name="precio"
                                    value={precio}
                                    onChange={handleInputChange}
                                
                                />
                            </div>

                            <div className="form-group">
                                Descripción:<input
                                    type="text"
                                    className="form-control"
                                    placeholder="descripción"
                                    required
                                    name="desc"
                                    value={desc}
                                    onChange={handleInputChange}
                                
                                />
                            </div>

                            <div className="form-group">
                                Stock:<input
                                    type="number"
                                    className="form-control"
                                    placeholder="stock"
                                    required
                                    name="stock"
                                    value={stock}
                                    onChange={handleInputChange}
                                
                                />
                            </div>

                         <div className="form-group">
                                <input 
                                    type="submit" 
                                    className="btnSubmit addProductButton" 
                                    value="Añadir Producto" />
                            </div>
                        </form>

                        <input
                                id="fileSelector"
                                type="file"
                                name="file"
                                style={{display: 'none'}}
                                onChange={handleFileChange}
                                />

                        <button className="btn"
                                style={{margin: '8px', background:"red", color:"white"}}
                                onClick={handlePictureClick}>
                                Cargar Imagen
                            </button>
                    

        <button className="btn" onClick={handleLogOut}
             style={{margin: '8px', background:"red", color:"white"}}>LogOut</button>
    </div>



    
  )
}
