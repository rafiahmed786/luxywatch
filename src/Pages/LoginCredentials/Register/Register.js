import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {error,setError,signInUsingGoogle,registerUsingEmailAndPassword}=useAuth();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const history = useHistory()
    
    const handleName=(e)=>{
        const value=e.target.value
        setName(value)
    }
    const handleEmail=(e)=>{
        const value=e.target.value
        setEmail(value)
    }
    const handlePass=(e)=>{
        const value=e.target.value
       setPass(value)
    }
    const handleSubmit=e=>{
        e.preventDefault();

        if(pass.length<6){
            return setError('Password Must Be At least 6 Characters')
        }
        else{
            setError('')
           }
        // console.log(email,password)
        registerUsingEmailAndPassword(name,email,pass,history)
        // console.log(user)
        }
    return (
        <div className='full-container'>
            <div className="login">
            <div className="login-form">
            <h4>Register To Luxywatch.com</h4>
             <form className=" p-3 text-center" onSubmit={handleSubmit}>
                 <input className="mb-3 p-2 width" onBlur={handleName} type="text" name="" placeholder="Enter Your Name" id="" />
                <input className="mb-3 p-2 width shadow" onBlur={handleEmail} type="email" placeholder="Enter your email adress" required name="" id="email-field" />
                <br />
                <input className="mb-3 p-2 width shadow" onBlur={handlePass} type="password" placeholder="Enter Your Password" name="" id="password-field" />
                <br />
                <p  className="text-danger">{error}</p>
                <input className="px-5 mb-3 btn button shadow" type="submit" value="Submit" />
                <br />
                <p>Already Member? <NavLink to='/login' style={{color:'#c5854a'}}>Login</NavLink></p>
    </form>

           <p>-----Or-----</p> 
            <button className="btn px-3 button shadow"  onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
        </div>
        </div>
    );
};

export default Register;