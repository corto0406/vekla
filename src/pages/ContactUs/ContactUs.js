import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css'; 

function ContactUs() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleCancel = () => {
    navigate('/'); // Navigate to the main interface or home page
  };

  return (
    <div className="contact-us">
      <h1>Fill in the form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="button-group">
          <button type="submit" className="submit-button">Send</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;