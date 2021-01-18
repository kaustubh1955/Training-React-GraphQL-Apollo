import React from 'react';
import '../../styles/Link.css';

const Link = (props) => (
    <p id='menu'>
        <a href="https://newzera.com/" className="men">About</a> 
        <a href="https://newzera.com/" className="men">Blog</a> 
        <a href="https://newzera.com/" className="men">Careers</a> 
        <a onClick={props.showpop} className="men" idName="con">Contact</a>
    </p>
    );

export default Link;