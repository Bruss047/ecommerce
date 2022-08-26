import React from 'react';
import { Item } from './Item';


export const ItemList = ({ items }) => {
   
    return (
        
        <div className="row">
            { items.map( p =>
                <Item
                    key={p.id}
                    id={p.id} 
                    name={p.nombre} 
                    price={p.precio} 
                    img={p.url}
                 
                />)
            }
        </div>
    )
}
