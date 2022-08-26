import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ({ id, name, price, stock, img}) => {
    
    return (
        <div className="col-6 col-sm-6 col-md-3 itemContainerDiv">
            <div className=" innerItemContainerDiv ">
            <Link className='itemProduct ' to={`/item/${id}`} >
                <img className='img-fluid' src={img}  alt="producto"></img>
                    <div className="img-container" height="50">
                        <h1 className='productName'>{name}</h1>
                    </div>

                    <div className="info-container">
                        <p className='price'>${price}</p>
                        <p className='stockAmount'>{stock}</p>
                        
                    </div>
                
            </Link>
            </div>
        </div>
    )
}

