import React from 'react';
import { Nav, Spinner, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const OrderInfo = ({order}) => {
    const {_id,name,watchName,email,price,watchId}=order;
    const {isLoading}= useAuth()
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    } 

    const handleDelete=id=>{
    const proceed = window.confirm('Are you sure, you want to delete?');
    
    if(proceed){
      const url = `https://young-cove-63019.herokuapp.com/orders/${id}`
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
         <Table striped bordered hover variant="dark">
  
  <tbody>
    <tr>
      <td style={{width:'20%'}} className="pt-4" >{name}</td>
      <td style={{width:'25%'}} className="pt-4" >{email}</td>
      <td style={{width:'15%'}} className="pt-4" >{watchName}</td>
      <td style={{width:'10%'}} className="pt-4" >{price}$</td>
      <td ><button className="button btn shadow px-4 mt-2" onClick={()=>handleDelete(_id)} >Cancel Order</button>
      </td>
      <td><Nav.Link href={`/dashboard/addreview/${watchId}`}><button className="button btn shadow px-4 m-0">Add A Review</button></Nav.Link></td>
    </tr>
   
    
  </tbody>
</Table>
    );
};

export default OrderInfo;