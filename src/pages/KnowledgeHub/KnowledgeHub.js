import React, { useState } from 'react';
import './KnowledgeHub.css';
import dropMenu from '../../components/profile/dropMenu.svg';
import Knowledge1 from '../KnowledgeHub/knowledge1.png';
import Knowledge2 from '../KnowledgeHub/knowledge2.png';
import Knowledge3 from '../KnowledgeHub/knowledge3.png';
import Knowledge4 from '../KnowledgeHub/knowledge4.png';
import Knowledge5 from '../KnowledgeHub/knowledge5.png';
import Knowledge6 from '../KnowledgeHub/knowledge6.png';

const StarRating = ({ rating, setRating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
          onClick={() => setRating(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const KnowledgeHub = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0); 
  const [rating6, setRating6] = useState(0); 

  const [isHeartSelected1, setHeartSelected1] = useState(false);
  const [isHeartSelected2, setHeartSelected2] = useState(false);
  const [isHeartSelected3, setHeartSelected3] = useState(false);
  const [isHeartSelected4, setHeartSelected4] = useState(false); 
  const [isHeartSelected5, setHeartSelected5] = useState(false);
  const [isHeartSelected6, setHeartSelected6] = useState(false);

  const toggleHeart = (setHeartSelected, currentStatus) => {
    setHeartSelected(!currentStatus);
  };

  return (
    <div className="knowledge-container">
      <div className="knowledge-text1">
        <h1>Course Selection</h1>
        <button className="knowledge1-button">Category</button>
        <button className="knowledge2-button">Duration</button>
        <button className="knowledge3-button">Level</button>
        <button className="knowledge4-button">Rating</button>
        <button className="knowledge5-button">My Favorites</button>
      </div>

      <a href="/profile">
        <img src={dropMenu} alt="DM" className="drop-picture5" />
      </a>
      <a href="/profile">
        <img src={dropMenu} alt="DM" className="drop-picture4" />
      </a>
      <a href="/profile">
        <img src={dropMenu} alt="DM" className="drop-picture3" />
      </a>
      <a href="/profile">
        <img src={dropMenu} alt="DM" className="drop-picture2" />
      </a>
      <a href="/profile">
        <img src={dropMenu} alt="DM" className="drop-picture1" />
      </a>

      <div className="knowledge-text2">
        <h1>Most Popular</h1>
      </div>

      <div className="knowledge-box1">
        <img src={Knowledge1} alt="KN1" className="knowledge1-picture" />
        <div className="knowledge-text3">
          <h2>Sales & Marketing</h2>
          <p>Professional Course</p>
          <button className="knowledge6-button">Enroll Now</button>
          <div
            className={`heart ${isHeartSelected1 ? 'selected' : ''}`}
            onClick={() => toggleHeart(setHeartSelected1, isHeartSelected1)}
          ></div>
        </div>
        <StarRating rating={rating1} setRating={setRating1} />
      </div>

      <div className="knowledge-box2">
        <img src={Knowledge2} alt="KN2" className="knowledge2-picture" />
        <div className="knowledge-text4">
          <h2>Customer Support</h2>
          <p>Professional Course</p>
          <button className="knowledge6-button">Enroll Now</button>
          <div
            className={`heart ${isHeartSelected2 ? 'selected' : ''}`}
            onClick={() => toggleHeart(setHeartSelected2, isHeartSelected2)}
          ></div>
        </div>
        <StarRating rating={rating2} setRating={setRating2} />
      </div>

      <div className="knowledge-box3">
        <img src={Knowledge3} alt="KN3" className="knowledge3-picture" />
        <div className="knowledge-text5">
          <h2>Speaking & Presentation</h2>
          <p>Professional Course</p>
          <button className="knowledge6-button">Enroll Now</button>
          <div
            className={`heart ${isHeartSelected3 ? 'selected' : ''}`}
            onClick={() => toggleHeart(setHeartSelected3, isHeartSelected3)}
          ></div>
        </div>
        <StarRating rating={rating3} setRating={setRating3} />
      </div>

      <div className="knowledge-text6">
        <h1>All Courses</h1>
      </div>

      <div className="knowledge-box4">
        <img src={Knowledge4} alt="KN4" className="knowledge4-picture" />
        <div className="knowledge-text6">
          <h2>Computer Operator</h2>
          <p>Professional Course</p>
          <button className="knowledge6-button">Enroll Now</button>
          <div
            className={`heart ${isHeartSelected4 ? 'selected' : ''}`}
            onClick={() => toggleHeart(setHeartSelected4, isHeartSelected4)}
          ></div>
        </div>
        <StarRating rating={rating4} setRating={setRating4} />
      </div>

      <div className="knowledge-box5">
        <img src={Knowledge5} alt="KN5" className="knowledge5-picture" />
        <div className="knowledge-text7">
          <h2>Accounting & Book</h2>
          <p>Professional Course</p>
          <button className="knowledge6-button">Enroll Now</button>
          <div
            className={`heart ${isHeartSelected5 ? 'selected' : ''}`}
            onClick={() => toggleHeart(setHeartSelected5, isHeartSelected5)}
          ></div>
        </div>
        <StarRating rating={rating5} setRating={setRating5} />
      </div>

      <div className="knowledge-box6">
        <img src={Knowledge6} alt="KN6" className="knowledge6-picture" />
        <div className="knowledge-text8">
          <h2>Event Management</h2>
          <p>Professional Course</p>
          <button className="knowledge6-button">Enroll Now</button>
          <div
            className={`heart ${isHeartSelected6 ? 'selected' : ''}`}
            onClick={() => toggleHeart(setHeartSelected6, isHeartSelected6)}
          ></div>
        </div>
        <StarRating rating={rating6} setRating={setRating6} />
      </div>
    </div>
  );
};

export default KnowledgeHub;

