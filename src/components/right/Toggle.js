import React from 'react';
import '../../styles/Toggle.css'
// import './CounterControl.css';

const Toggle = (props) => (
    <div class="dotd">
        <span class="dot dot1" onClick={props.clicked1} ></span>
        <span class="dot" onClick={props.clicked2}></span>
    </div>
);

export default Toggle;

