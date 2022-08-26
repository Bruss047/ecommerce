import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDmXsUNW5El3M4wtWVb8bDRLvzEML4PvaU",
  authDomain: "ecommerce-f6094.firebaseapp.com",
  projectId: "ecommerce-f6094",
  storageBucket: "ecommerce-f6094.appspot.com",
  messagingSenderId: "657128991667",
  appId: "1:657128991667:web:ef5f57cfa972492cdb39c6"
};

// Initialize Firebase
 

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

   export{
      db,
      firebase
  }