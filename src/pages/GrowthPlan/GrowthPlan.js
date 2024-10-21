import React from 'react';
import './GrowthPlan.css'; // Ensure this CSS file is linked correctly
import Growth from '../GrowthPlan/growth.png';

const GrowthPlan = ({ Notes }) => {
    return (
        <div className="growth-container">
            <div className="growth-text1">
                <h1>Current role</h1>
                <h2>Role:</h2>
                <p>Sales Developments Representative</p>
            </div>
            <div className="growth-text2">
                <h2>Level:</h2>
                <p>Intermediate</p>
            </div>
            <div className="growth-text3">
                <h1>Goals</h1>
                <h2>Short Term:</h2>
                <p>Go from Intermediate to Advance level SDR</p>
            </div>
            <div className="growth-text4">
                <h2>Long Term:</h2>
                <p>Account Executive</p>
            </div>
            <div className="growth-text5">
                <h1>Focus skills</h1>
            </div>

            {/* Card 1 */}
            <div className="growth-box1">
                <h2>Communication</h2>
                <p>Ask for help</p>
                <p>Keep your AE informed of account progress</p>
                <p>Involve product when needed</p>
            </div>

            {/* Card 2 */}
            <div className="growth-box2">
                <h2>Leadership</h2>
                <p>Help teammates who struggles</p>
                <p>Take on initiatives outside your role</p>
                <p>Give feedback when you have</p>
            </div>

            {/* Card 3 */}
            <div className="growth-box3">
                <h2>Negotiation</h2>
                <p>Be better at follow playbook</p>
                <p>Involve multiple stakeholders</p>
                <p>Don’t disclose price in first call</p>
            </div>

            {/* Additional Cards */}
            <div className="growth-box4">
                <h3>Planning</h3>
                <p>Skills review & growth plan</p>
                <p>Quarterly skills call</p>
                <p>Skills review</p>
                <p>Quarterly skills call</p>
                <p>Skills review & growth plan</p>
            </div>
            <div className="growth-box5">
                <h3>Skills</h3>
                <h4>Strengths</h4>
                <p>Discovery Calls</p>
                <p>Structure</p>
                <h2>Weaknesses</h2>
                <p>Negotiation</p>
                <p>Product Knowledge</p>
                <img src={Growth} alt="Growth" className="growth-picture" />
            </div>
            <div className="growth-box6">
                <p>January 7th 2024</p>
                <p>April 15th 2024</p>
                <p>June 25th 2024</p>
                <p>September 24th 2024</p>
                <p>January 8th 2025</p>
                <div className="button6">
                    <span className="button6-text">{Notes}</span>
                </div>
                <div className="button7">
                    <span className="button7-text">{}</span>
                </div>
                <div className="button8">
                    <span className="button8-text">{}</span>
                </div>
                <div className="button9">
                    <span className="button9-text">{}</span>
                </div>
                <div className="button10">
                    <span className="button10-text">{}</span>
                </div>

            </div>
        </div>
    );
};

export default GrowthPlan;
