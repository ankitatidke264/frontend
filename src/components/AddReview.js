import React, { useState } from 'react';

function AddReview({ isOpen, onClose }) {
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [foundedOn, setFoundedOn] = useState('');
    const [city, setCity] = useState('');
  
    if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
    <div className="modal">
      <div className="modal-header">
        <h2>Add Review</h2>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
      <div className="modal-body">
        <label>Company name</label>
        <input 
          type="text" 
          placeholder="Company name" 
          value={companyName} 
          onChange={(e) => setCompanyName(e.target.value)} 
        />
        <label>Location</label>
        <input 
          type="text" 
          placeholder="Select Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
        <label>Founded on</label>
        <input 
          type="date" 
          placeholder="Founded on" 
          value={foundedOn} 
          onChange={(e) => setFoundedOn(e.target.value)} 
        />
        <label>City</label>
        <input 
          type="text" 
          placeholder="City" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
      </div>
      <div className="modal-footer">
        <button className="save-btn">Save</button>
      </div>
    </div>
  </div>
  )
}

export default AddReview
