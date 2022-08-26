import React from 'react';
import background from '../assets/libros.jpg';


export const HeroImage = React.memo(() =>{
    
    return (

        <>
           <div style={{ backgroundImage: `url(${background})` }} className="bg-dark text-secondary px-4 py-5 text-center heroImage ">
                <div className="py-5">
                <h1 className="display-5 fw-bold text-white">LIBRERÍA ONLINE</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4 text-white">Encontrá los mejores libros al mejor precio.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  
                    </div>
                </div>
                </div>
            </div>
        </>
    )


}
);
