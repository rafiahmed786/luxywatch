import React from 'react';
import { Nav } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../Hooks/useAuth';


const Review = ({reviewinfo}) => {
        const {_id,name,watchName,review,rating}= reviewinfo;
        const {isAdmin}= useAuth();
        const handleDelete=id=>{
    const proceed = window.confirm('Are you sure, you want to delete?');
    
    if(proceed){
      const url = `https://young-cove-63019.herokuapp.com/reviews/${id}`
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
       <div class="card text-white bg-dark mb-3 m-2" style={{maxWidth: "18rem"}}>
  <div class="card-header">{name}</div>
  <div class="card-body">
    <h5 class="card-title">{watchName}</h5>
    <p class="card-text">{review}</p>
    <p><Rating initialRating={parseInt(rating)}  emptySymbol="far fa-star"
                fullSymbol="fas fa-star" readonly stop={5} /></p>
                { isAdmin &&
          <Nav.Link ><button onClick={()=>handleDelete(_id)} className="button btn shadow ">Delete</button></Nav.Link>
        }
  </div>
</div>
    );
};

export default Review;