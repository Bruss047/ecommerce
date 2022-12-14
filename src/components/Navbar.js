import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from './CartIcon';
import { SearchBar } from './SearchBar';




export const Navbar = () => {
    
    return (
        <>

        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                 <Link to="/" className="navbar-brand mt-lg-0 homeLink"> Home </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <Link to="/upload_products" className="nav-link">Login</Link>
                    </li>
                   
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                  
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <SearchBar/>
                    </form>
                    <CartIcon/>
                </div>
                </nav>

        </>
    )
}
