import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const SearchBar = () => {


  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {products} = useSelector(state => state.products);


  console.log(products)

  const handleChange=(e)=>{
    setSearch(e.target.value);
    filtrar(e.target.value);
    }

  const filtrar=(search)=>{

    let resultadosBusqueda= products.filter((elemento)=>{
        if(elemento.nombre.toString().toLowerCase().includes(search.toLowerCase())){
        return elemento;
        }else{
            return ""
        }
    });
    
    setFilteredProducts(resultadosBusqueda);
}

  return (
    <div>

                  <input
                      className="form-control rounded"
                      type="search"
                      placeholder="Buscar Producto"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      value={search}
                      onChange={handleChange}
                      />
    
              
                  <div className='searchResults'>
                      {  (search.length!==0)
                          &&
                          filteredProducts.map(p => 
                          <ol key={p.id}>
                          <Link className='searchRes' to={`/item/${p.id}`} > {p.nombre} </Link>
                          </ol>)
                          
                          }
                  </div>
          
      
      </div>
           
    
  )
}
