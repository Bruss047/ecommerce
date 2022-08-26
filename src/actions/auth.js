
//import Swal from 'sweetalert2'; //cuadros de alerta.
import { types } from './../types/types';
//import { startLoading, finishLoading } from './ui';
import { firebase } from '../firebase/firebase-config';




export const startLoginEmailPassword = (email,password)=>{

    return (dispatch)=>{//dispatch --> se lo proporciona el middleware Thunk al callback.
        //dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({user}) =>{
           console.log(user)
           dispatch(
               login(user.uid, user.email));
               //dispatch(finishLoading());
               console.log("logged!")
            
        }).catch(e=>{
            console.log(e);
            //dispatch(finishLoading());
            //Swal.fire('Error',e.message, 'error');
        })
        

    }
}

export const login = (uid, displayName)=> ({ //retorna implicitamente un objeto.
        type: types.login,
        payload:{
            uid,
            displayName
        }
})

export const startLogout=()=>{
    return async (dispatch)=>{
       await firebase.auth().signOut();
       dispatch(logout());
    }
}

export const logout = () =>({
    type:types.logout

});