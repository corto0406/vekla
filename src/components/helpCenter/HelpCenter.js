import React from 'react';
import './HelpCenter.css'; // Import CSS file for styling
import ellipse from '../helpCenter/ellipse.png';
import head from '../helpCenter/head.png';

const HelpCenter = () => {
    return (
        <div className="help-center">
            <div className="ellipse-container">
                <img src={ellipse} alt="Ellipse" className="ellipse-image" />
                <img src={head} alt="Head" className="head-image" />
            </div>
            <div className="help-center-content">
                <h2 className="help-center-title">Help Center</h2>
                <div className="help-center-description">
                    <p>Having trouble in.</p>
                    <p>Please contact us for more</p>
                    <p>questions</p>
                </div>

                <div className="help-center-buttons">
                    <button className="help-center-button">Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default HelpCenter;