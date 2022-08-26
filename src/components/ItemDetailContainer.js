import React, { useEffect, useState} from 'react'


import {useParams} from 'react-router-dom';



import { ItemDetail } from './ItemDetail';

import { db } from '../firebase/firebase-config';


export const ItemDetailContainer = () => {

    const {id} = useParams();

    const [item, setItem ] = useState([]);
    const [loading, setLoading ] = useState(true);



    useEffect(() => {


        const itemCollection = db.collection('productos');
        const item = itemCollection.doc(id);
        
        item.get().then( doc => {

            if(!doc.exists){
                setItem("No existe el producto")
                return;
            }
            
            setItem({ id: doc.id, ...doc.data() });
            
        })
        .catch(err => console.log(err))
        .finally(()=> {
            setLoading(false)
        })

    }, [id]);


    return(
            <>
            <ItemDetail item={item} /> 
            </>
        )
}




