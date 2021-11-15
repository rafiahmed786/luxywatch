import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Watch = ({watch}) => {
    const {_id,name,title,img}= watch;
    const {isAdmin}= useAuth();

        const handleDelete=id=>{
    const proceed = window.confirm('Are you sure, you want to delete?');
    
    if(proceed){
      const url = `https://young-cove-63019.herokuapp.com/watches/${id}`
    fetch(url,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        alert('Deleted Successfully')
        window.location.reload()
      }
    })
    }
    }
    return (
        <div className="card shadow" style={{width:'320px',margin:'10px',borderRadius:'5px'}}>
        <div style={{width:'100%',overflow:"hidden"}}>
        <img src={img} style={{width:'100%',objectFit:"cover",borderRadius:'5px'}} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body pb-5">
          <h3 className="card-title fs-4 fst-italic">{name}</h3>
          <p className="card-text">{title}</p>
          
        <NavLink to={`/watchdetails/${_id}`}><button className="button btn shadow px-4">View Details</button></NavLink>
        { isAdmin &&
          <Nav.Link ><button onClick={()=>handleDelete(_id)} className="button btn shadow ">Delete</button></Nav.Link>
        }
          
        </div>
      </div>
    );
};

export default Watch;