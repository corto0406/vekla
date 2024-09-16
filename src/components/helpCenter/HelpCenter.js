import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HelpCenter.css'; // Import CSS file for styling
import ellipse from '../helpCenter/ellipse.png';
import head from '../helpCenter/head.png';

const HelpCenter = ({ onClick }) => {
    return (
        <div className="help-center" onClick={onClick}>
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
                    <Link to="/contact-us" className="help-center-button">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HelpCenter;
