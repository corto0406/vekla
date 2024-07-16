import React from 'react';
import './Button.css';

function Button({ User, NameInfo, EmailInfo }) {
    return (
        <div className="button-container">
            <div className="button">
                <span className="button-text">{User}</span>
            </div>
            <div className="name-info">{NameInfo}</div>
            <div className="email-info">{EmailInfo}</div>
        </div>
    );
}

export default Button;