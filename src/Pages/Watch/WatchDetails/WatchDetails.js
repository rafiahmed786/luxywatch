import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router';

const WatchDetails = () => {
    const {id}=useParams();
    const [watch,setWatch]=useState({});

    useEffect(()=>{
        const url=`https://young-cove-63019.herokuapp.com/watches/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setWatch(data))
    },[])
    const {_id,name,description,price,img,title}= watch;


    return (
       <div style={{display:'flex',justifyContent:'center'}}>
            <div className="card shadow" style={{width:'500px',margin:'10px',borderRadius:'5px'}}>
        <div style={{width:'100%',overflow:"hidden"}}>
        <img src={img} style={{width:'100%',objectFit:"cover",borderRadius:'5px'}} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body">
          <h4 className="card-title fst-italic">{name}</h4>
          <p className="card-text fw-bold">{title}</p>
          <p className="card-text fst-italic">{description}</p>
          <p>Price <b> {parseInt(price)}$</b></p>
        <Nav.Link href={`/placeorder/${_id}`}><button className="button btn shadow px-4">Place Order</button></Nav.Link>
        
          
        </div>
      </div>
        </div>
    );
};

export default WatchDetails;