import React from 'react';
import './Header.css'
import { Container,Nav,Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" className='nav-container'>
        <Container>
        <Navbar.Brand className='links'><Nav.Link className='links p-0' as={HashLink} to='/home#homeSlider'>Luxywatch.com</Nav.Link></Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-light' />
        <Navbar.Collapse className="justify-content-end ">     
          <Nav.Link as={HashLink} className='links m-0' to='/home#homeSlider'>Home</Nav.Link>
          <Nav.Link><NavLink className='links' to='/explore'>Explore</NavLink></Nav.Link>
          <Nav.Link className='links p-0 pe-2' as={HashLink} to='/home#about'>About</Nav.Link>
          {
              user?.email && 
              <NavLink className='links p-0' to='/dashboard'>Dashboard</NavLink>
          }
          
            {
            user?.email && <h6 style={{color:'#fff',borderLeft:'2px solid #fff',textAlign:'center'}} className=' ps-2 fs-6 m-0 justify-content-center me-3'>{user?.displayName}</h6>
          }          
          <div>{user?.email ? <h6 className="btn button m-0 shadow" onClick={logOut}>Sign Out</h6> :
          <NavLink className='links login-btn' to='/login'>Login</NavLink>}</div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;