import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../api';
import moment from 'moment';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies()
      .then(response => setCompanies(response.data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  return (
    <div className="company-list">
      {companies.map((company, index) => (
        <div className="company-card" key={index}>
          <div className="company-logo">
            <img src="data:image/png;base64,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" alt={company.name} />
          </div>
          <div className="company-info">
            <h3>{company.name}</h3>
            <p>{company.location}</p>
            <div className="company-meta">
              <span>⭐ {company.rating}</span>
              <span>{company.reviews.length} Reviews</span>
              <span>Founded on {moment(company.foundedOn).format('DD-MM-YYYY')}</span>
            </div>
          </div>
          <div className="company-action">
            <button>Detail Review</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
