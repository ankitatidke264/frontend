import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AddCompanyModal from './AddCompany';

function SubNavbar() {
  const [city, setCity] = useState('Indore, Madhya Pradesh, India');
  const [sort, setSort] = useState('Name');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="search-filter">
      <div className="city-select">
        <label>Select City</label>
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Select City" 
        />
        <span className="location-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
      </div>

      <button className="find-company-btn">Find Company</button>

      {/* Open Modal when "Add Company" is clicked */}
      <button className="add-company-btn" onClick={handleOpenModal}>+ Add Company</button>

      <div className="sort-select">
        <label>Sort:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="Name">Name</option>
          <option value="Rating">Rating</option>
        </select>
      </div>

      {/* AddCompanyModal component with conditional rendering */}
      {isModalOpen && <AddCompanyModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
}

export default SubNavbar;
