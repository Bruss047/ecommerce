import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from './../customHook/useForm';
import { startLoginEmailPassword } from './../actions/auth';



export const LoginScreen = () => {

    const navigate= useNavigate();
    const dispatch = useDispatch();
   // const {loading} = useSelector( state => state.ui );

    const [formValues, handleInputChange] = useForm({
        email:'ejemplo@gmail.com',
        password:'123456'
    })

    const {email, password} = formValues;

    const handleLogin = (e)=>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password));
        navigate("/upload_products");

    }

  
    return (
        <> 
        <div className='col-md-10 mx-auto textAlingCenter'>
 
            <h3 style={{margin:"8px"}} className="textAlingCenter">Login</h3>

            <form onSubmit={handleLogin}
                  className="">

                <input type="text"
                        placeholder="Email"
                        name="email"
                        className="auth__input"
                        autoComplete="off"
                        style={{margin:"8px"}}
                        value={email}
                        onChange={handleInputChange}
                    />

                <input type="password"
                        placeholder="Password"
                        name="password"
                        className="auth__input"
                        style={{margin:"8px"}}
                        value={password}
                        onChange={handleInputChange}
                    />

                 <button className="btn btn-primary btn-block"
                         type="submit"
                         //disabled={loading}
                        >
                     Login
                </button>   
             
            </form>
            
            </div>
        </>
    )
}