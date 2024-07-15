import React from 'react';
import './Button.css';

function Button({ User }) {
    return (
        <div className="button">
           <span className="button-text">{User}</span>
        </div>
    );
}

export default Button;