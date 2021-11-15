import React from 'react';
import useWatch from '../Hooks/useWatch';
import Watch from '../Watch/Watch';

const Explore = () => {
    const [watches]= useWatch();
    return (
       <div>
            <h2 className="fs-3 mt-5" style={{color:'#000000'}}>Get Your Favourite Watch <br /> From Here!</h2>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}></div>

            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
            {
               watches.map(watch=> <Watch 
               key={watch._id}
               watch={watch}
               ></Watch>) 
            }
             </div>
        </div>
    );
};

export default Explore;