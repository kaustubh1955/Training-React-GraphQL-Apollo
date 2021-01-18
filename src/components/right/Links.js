import React from 'react';
import fb from "../../Images/FB-icon-black.png";
import tw from "../../Images/Twitter-icon-black.png";
import ld from "../../Images/linkedin-icon-black.png";

import '../../styles/Links.css'
// import './CounterControl.css';

const Links = (props) => (
    <div className='icons'>
        <a href="https://www.facebook.com/newzeraapp"><img src={fb} height='11' width='10' /></a>
        <a className="formargin" href="https://www.linkedin.com/company/newzera/"><img src={ld} height='10.5' width='10.5' /></a>
        <a className="formargin" href="https://twitter.com/newzeraapp"><img src={tw} height='10.5' width='10.5' /></a>
    </div>
    );

export default Links;

