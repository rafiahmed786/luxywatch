import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AddReview = () => {
    const [watch,setWatch]=useState({});
    const { register, handleSubmit,reset} = useForm();
    const {user,isLoading}= useAuth();
    const {id}=useParams();
    console.log(id)
    useEffect(()=>{
        const url=`https://young-cove-63019.herokuapp.com/watches/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setWatch(data))
    },[])
    

    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }

    const onSubmit = data =>{
         axios.post(`https://young-cove-63019.herokuapp.com/reviews`,data)
         .then(res=>{
             console.log(res)
             
            })
            
                alert('Your Review Placed Successfully')
                reset();
         
         
         
     }

    return (
        <div className="d-flex align-items-center flex-column py-5">
            <h4>Please Give Your Review</h4>
             <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-25">
      <input defaultValue={user?.displayName} className="p-2 mt-3" {...register("name")} placeholder="Enter your name" readOnly required />
      
      <input required className="p-2 mt-3" defaultValue={watch.name} {...register("watchName")} placeholder="Watch Name" readOnly />
      <textarea required className="p-2 mt-3" {...register("review")} placeholder="Please Give Your Review" />
      <input required className="p-2 mt-3" type="number"  {...register("rating",{ pattern:/[1-5]/ })} placeholder="Please Give a Rating From 1-5"  min="1" max="5" />
        
      
      <input className="button py-2 mt-3 shadow" type="submit" style={{border:'none'}} />
    </form>

        </div>
    );
};

export default AddReview;