import React, { useEffect, useState } from 'react';
import Review from './Review';

const ReviewContainer = () => {
 const [reviews,setReviews]=useState([]);
    useEffect(()=>{
       fetch('https://young-cove-63019.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[])
    return (
       <div style={{background:'#333'}} className='pb-5'>
           <h2 className="fs-3 pt-5 py-4" style={{color:'#fff'}}>View Our Happy Customer's <br /> Review!</h2>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                {
                    reviews.map(reviewinfo=> <Review 
                    key={reviewinfo._id}
                    reviewinfo={reviewinfo}
                    ></Review>)
                }
        </div>
       </div>
    );
};

export default ReviewContainer;