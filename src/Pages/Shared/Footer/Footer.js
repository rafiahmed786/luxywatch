import React from 'react';

const Footer = () => {
    return (
        <div style={{background:'#333',padding:'20px',color:'#fff',marginTop:'30px'}}>
            <div>
            <a href="https://facebook.com"><i className="fab fa-facebook me-2 fs-3 text-light"></i></a>
            
            <a href="https://youtube.com"><i className="fab fa-youtube me-2 fs-3 text-light"></i></a>
            <a href="https://instagram.com" style={{textDecoration:'none'}}> <i className="fab fa-instagram me-2 fs-3 text-light"></i></a>
           
            
            </div>
            <p>©Copyright 2022.All rights reserved by <br /> Luxywatch.com </p>
        </div>
    );
};

export default Footer;