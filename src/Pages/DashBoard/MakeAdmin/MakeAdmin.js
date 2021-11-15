import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {  
    const [email,setEmail]=useState('');

    const handleEmail=(e)=>{
        const value=e.target.value
        setEmail(value)
    }

    const handleSubmit=e=>{

        e.preventDefault()
        const user = {email}
        axios.put('https://young-cove-63019.herokuapp.com/users/admin',user)
        .then(res=>console.log(res))
        setEmail('')
        alert('Admin Created Successfully')
    }
    return (
        <form className=" p-3 text-center" onSubmit={handleSubmit}>
                <input required type='email' className="p-2 my-3 w-25" onBlur={handleEmail} placeholder="Enter Admin Email" />
                <br />
                <input className="px-5 mb-3 btn button shadow" type="submit" value="Submit"/>
    </form>

    );
};

export default MakeAdmin;