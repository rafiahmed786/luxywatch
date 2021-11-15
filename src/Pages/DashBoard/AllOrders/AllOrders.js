import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import OrderInfo from '../orderInfo/OrderInfo';

const AllOrders = () => {
    const {user,isLoading}= useAuth();
    // console.log(isLoading)
    const [orders,setOrders]=useState({});
    useEffect(()=>{
        const url=`https://young-cove-63019.herokuapp.com/orders`
        fetch(url)
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[user])
    
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }    
    const data = Array.from(orders);
    return (
         <>
            <Table striped bordered hover variant="dark">
            <thead>
    <tr>
      <th style={{width:'20%'}}>Name</th>
      <th style={{width:'25%'}}>Email</th>
      <th style={{width:'15%'}}>Watch Name</th>
      <th style={{width:'10%'}}>Watch Price</th>
      <th>Activity</th>
    </tr>
  </thead>
  </Table>
            {
               data?.map(order => <OrderInfo key={order._id} order={order}></OrderInfo>) 
            
            }
        </>
    );
};

export default AllOrders;