import React from 'react';
import './Button.css';

function Button({ User, ButtonInfo }) {
    return (
        <div className="button-container">
            <div className="button">
                <span className="button-text">{User}</span>
            </div>
            <div className="button-info">{ButtonInfo}</div>
        </div>
    );
}

export default Button;