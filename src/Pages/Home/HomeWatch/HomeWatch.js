import React from 'react';
import useWatch from '../../Hooks/useWatch';
import Watch from '../../Watch/Watch';

const HomeWatch = () => {
    const [watches]= useWatch();


    return (
        <div>
            <h2 className="fs-3 mt-5" style={{color:'#333'}}> Get Your Favourite Watch <br /> From Here!</h2>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}></div>

            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
            {
               watches.slice(0,6).map(watch=> <Watch 
               key={watch._id}
               watch={watch}
               ></Watch>) 
            }
             </div>
        </div>
    );
};

export default HomeWatch;