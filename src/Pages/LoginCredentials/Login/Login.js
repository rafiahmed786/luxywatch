import React, { useState } from 'react';
import './Login.css'
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {error,setError,signInUsingGoogle,signInUsingEmailAndPassword}=useAuth();

    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const location= useLocation();
    const history = useHistory();

    
// console.log(location.state?.from)
    // console.log(signInUsingGoogle)
    const handleEmail=(e)=>{
        const value=e.target.value
        setEmail(value)
    }

    const handlePass=(e)=>{
        const value=e.target.value 
       setPass(value)
    }

    // console.log(user)
    const handleSubmit=e=>{
        e.preventDefault()
        if(pass.length<6){
            return setError('Password Must Be At least 6 Characters')
        }
        else{
            setError('')
           }
           signInUsingEmailAndPassword(email,pass,location,history)
         
    }   

    const handleGoogleSignIn=(location,histoy)=>{
        signInUsingGoogle(location,history)
    }
   
    return (
        <div className='full-container'>
            <div className="login">
            <div className="login-form">
            <h4>Sign In To Luxywatch.com</h4>
             <form className=" p-3 text-center" onSubmit={handleSubmit}>
                <input className="mb-3 p-2 width shadow" onBlur={handleEmail} type="email" placeholder="Enter your email adress" required name="" id="email-field" />
                <br />
                <input className="mb-3 p-2 width shadow" onBlur={handlePass} type="password" placeholder="Enter Your Password" name="" id="password-field" />
                <br />
                <p  className="text-danger">{error}</p>
                <input className="px-5 mb-3 btn button shadow" type="submit" value="Submit" />
                <p>Not Registered yet? <NavLink to='/register' style={{color:'#c5854a'}}>Register</NavLink></p>
    </form>

           <p>-----Or-----</p> 
            <button className="btn px-3 button shadow"  onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
        </div>
        </div>
    );
};

export default Login;