import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
    import { useForm } from "react-hook-form";
import axios from 'axios';

const PlaceOrder = () => {
const { register, handleSubmit,reset} = useForm();
    const {user,isLoading}= useAuth();
    const {id}=useParams();
    const [watch,setWatch]=useState({});
    
   
    
const {_id,name,price}= watch;

    useEffect(()=>{
        const url=`https://young-cove-63019.herokuapp.com/watches/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setWatch(data))
    },[])
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }

    const onSubmit = data =>{
        console.log(data)
         axios.post(`https://young-cove-63019.herokuapp.com/orders`,data)
         .then(res=>console.log(res))
         alert('Your Order Placed Successfully')
         reset();
     }


    return (

        <div className="d-flex align-items-center flex-column py-5">
            <h4>Please Fill Up the Forms</h4>
             <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-25">
      <input defaultValue={user?.displayName} className="p-2 mt-3" {...register("name")} placeholder="Enter your name"  required />
      <input defaultValue={user?.email} type="email" required className="p-2 mt-3" {...register("email")} placeholder="Enter your E-mail"  />
      <input required className="p-2 mt-3" {...register("phone")} placeholder="Enter your phone number" />
      <input required className="p-2 mt-3"  {...register("address")} placeholder="Enter Your Address" />
        <h5 className="mt-4">Watch's Information</h5>
        <label htmlFor="" className="label-text" style={{textAlign:'left'}}>Watch Name</label>
      <input defaultValue={name}  required className="p-2"  {...register("watchName")}  readOnly />
      <label htmlFor="" className="label-text mt-3" style={{textAlign:'left'}}>Watch Price</label>
      <input defaultValue={price} required className="p-2"  {...register("price")}  readOnly/>
      <input defaultValue={_id}  required className="p-2 d-none"  {...register("watchId")}  readOnly />
      
      <input className="button py-2 mt-3 shadow" type="submit" style={{border:'none'}} />
    </form>

        </div>
    );
};

export default PlaceOrder;