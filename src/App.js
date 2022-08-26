import React, { useEffect, useState} from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';

//Css particular
// import './components/assets/styles/app.css'
import { useDispatch } from 'react-redux';
import { startLoadingItems } from './actions/products';


import { BuyForm } from './components/BuyForm';
import { Navbar } from './components/Navbar';
import { LoginScreen } from './components/LoginScreen';
import { login } from './actions/auth';
import { firebase } from '../src/firebase/firebase-config';
import { PrivateRoute } from './routes/PrivateRoute';
import { UploadProduct } from './components/UploadProduct';
import { HeroImage } from './components/HeroImage';
import { Footer } from './components/Footer';


export const App = () => {

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged(async (user)=>{ //va a observar cada vez que cambie la autenticacion del usuario. (se va a ejecutar solo una vez cada vez que se refresque el navegador)

            if(user?.uid){
                dispatch(login(user.uid, user.email));
                setIsLoggedIn(true);
               

            }else{
                setIsLoggedIn(false);
            }
            setCheking(false);
        })

    }, [dispatch, setCheking, setIsLoggedIn]);


    useEffect(() => {

        dispatch(startLoadingItems());
        //dispatch(setCart());
       
    },
    []);

      if(cheking){
        return (
            <h1>Cargando...</h1>
        )
    }


    return(

     <>
        
        <BrowserRouter>
      
          <Navbar/>
               <HeroImage/>
                <Routes>
                    
                    <Route path="/" element={<ItemListContainer />}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/order" element={<BuyForm/>}/>
                    <Route path="/login" element={<LoginScreen/>}/>

                    <Route
                        path="/upload_products"
                        element={
                            <PrivateRoute isAuthenticated={ isLoggedIn }>
                              <UploadProduct/>
                            </PrivateRoute>
                        }
                        />

                </Routes>
          <Footer/>
        </BrowserRouter>
        </>
    ) 

}