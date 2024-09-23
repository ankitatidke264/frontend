import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Company API calls
export const fetchCompanies = () => API.get('/companies');
export const addCompany = (companyData) => API.post('/add/company', companyData);

// Review API calls
export const fetchReviews = (companyId) => API.get(`/companies/${companyId}/reviews`);
export const addReview = (companyId, reviewData) => API.post(`/companies/${companyId}/reviews`, reviewData);

export default API;
