import React, { useState } from 'react';
import { addCompany } from '../api';

function AddCompany({ isOpen, onClose }) {
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [foundedOn, setFoundedOn] = useState('');
    const [city, setCity] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const companyData = {
            name: companyName,
            location,
            foundedOn,
            city
        };
        
        addCompany(companyData)
            .then(response => {
                console.log('Company added:', response.data);
                setSuccessMessage('Company successfully added!'); // Set success message
                // Clear the form fields
                setCompanyName('');
                setLocation('');
                setFoundedOn('');
                setCity('');
                // Optionally, you could set a timeout to clear the message or close the modal
                setTimeout(() => {
                    setSuccessMessage('');
                    onClose(); // Close the modal after displaying the message
                }, 3000);
            })
            .catch(error => {
                console.error('Error adding company:', error);
                setSuccessMessage('Failed to add company.'); // Display error message
                setTimeout(() => setSuccessMessage(''), 3000); // Clear message after some time
            });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-header">
                    <h2>Add Company</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="companyName">Company Name</label>
                        <input 
                            id="companyName"
                            type="text"
                            placeholder="Company name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                        <label htmlFor="location">Location</label>
                        <input 
                            id="location"
                            type="text"
                            placeholder="Select Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                        <label htmlFor="foundedOn">Founded On</label>
                        <input 
                            id="foundedOn"
                            type="date"
                            value={foundedOn}
                            onChange={(e) => setFoundedOn(e.target.value)}
                            required
                        />
                        <label htmlFor="city">City</label>
                        <input 
                            id="city"
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        {successMessage && <p>{successMessage}</p>} {/* Display success or error message */}
                        <div className="modal-footer">
                            <button type="submit" className="save-btn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddCompany;
