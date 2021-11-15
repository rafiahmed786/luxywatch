import axios from 'axios';
import React, { useState } from 'react';

const AddWatch = () => {

const [watchData,setWatchData]=useState({});

    const handleonBlur=e =>{
      const field=e.target.name;
      const value=e.target.value;
        const newData= {...watchData};
        newData[field]=value;
        setWatchData(newData)
       
    }
    const handleSubmit=e =>{
        e.preventDefault()
        
        axios.post('https://young-cove-63019.herokuapp.com/watches', watchData)
        .then(res=> {
            alert('Submitted Successfully')
            setWatchData('')
        })
    }
    return (
        <div className="d-flex align-items-center flex-column py-5">
            <h4>Give Your Watch's Information</h4>
             <form onSubmit={handleSubmit} className="d-flex flex-column w-25 ">
      <input required className="p-2 mt-3" name="name" onBlur={handleonBlur}  placeholder="Enter watch name" />
      <textarea required className="p-2 mt-3" name='title' onBlur={handleonBlur} placeholder="Enter Your Watch's Title" />
      <textarea required className="p-2 mt-3" name='description' onBlur={handleonBlur} placeholder="Describe Your Watch's specifications" />
       <input required className="p-2 mt-3" type="number" name="price" onBlur={handleonBlur}  placeholder="Enter watch Price" />
       <input required className="p-2 mt-3" name="img" onBlur={handleonBlur}  placeholder="Enter image url" />
      
      <input className="button py-2 mt-3 shadow" type="submit" style={{border:'none'}} />
    </form>

        </div>
    );
};

export default AddWatch;