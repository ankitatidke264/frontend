import './App.css';
import Navbar from "./components/Navbar";
import SubNavbar from './components/SubNavbar';
import CompanyList from './components/CompanyList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from "react";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <SubNavbar/>
    <CompanyList/>
    <Routes>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
