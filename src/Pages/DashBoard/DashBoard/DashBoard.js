import React from 'react';
import './DashBoard.css'
import { Container,Nav,Navbar } from 'react-bootstrap';
import { NavLink,BrowserRouter as Router,Switch, Route,Link, useParams,useRouteMatch } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import AddWatch from '../AddWatch/AddWatch';
import AddReview from '../AddReview/AddReview';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';


const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const {isAdmin}= useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  className='nav-container sub-nav'>
        <Container>
        <Navbar.Brand className='links'><Nav.Link className='links p-0' as={HashLink} to='/home'>Dashboard</Nav.Link></Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-light' />
        <Navbar.Collapse className="justify-content-end ">     
          <Nav.Link><NavLink className='links' to='/dashboard'>My Orders</NavLink></Nav.Link>
          <Nav.Link><NavLink className='links' to={`${url}/payment`}>Payment</NavLink></Nav.Link>
        
         {
             isAdmin && <>
                 <Nav.Link><NavLink className='links' to={`${url}/makeadmin`}>Make Admin</NavLink></Nav.Link>
         <Nav.Link><NavLink className='links' to={`${url}/allorders`}>All Orders</NavLink></Nav.Link>
         <Nav.Link><NavLink className='links' to={`${url}/addwatch`}>Add Watch</NavLink></Nav.Link>
             </>
         }
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path={path}>
        <MyOrders></MyOrders>
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/allorders`}>
            <AllOrders></AllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/addwatch`}>
            <AddWatch></AddWatch>
        </AdminRoute>
        <Route path={`${path}/payment`}>
            <Payment></Payment>
        </Route>
        <Route path={`${path}/addreview/:id`}>
            <AddReview></AddReview>
        </Route>
      </Switch>
        </div>
    );
};

export default DashBoard;