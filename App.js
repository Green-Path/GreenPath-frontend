import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/homePage';
import News from './pages/news';
import Customer from './pages/Customer';
import "./Customer"
import { useState } from 'react';
//import Customer from './Customer';

function App() {
const [selectedValue, setSelectedValue] = useState('');
const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');
const [itemLink, setItemLink] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const fetchItemLink = () => {
    // Perform AJAX request here
    // Update itemLink state based on response
    // For example:
    const newItemLink = `http://example.com/items/${selectedValue}?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    setItemLink(newItemLink);
    
  };

  return (
    // <div className="App">
    //   <Customer handleSelectChange={handleSelectChange} handleMinPriceChange={handleMinPriceChange} handleMaxPriceChange
    //   ={handleMaxPriceChange} fetchItemLink={fetchItemLink}/>
    // </div>

<Router>
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/news' element={<News />} />
  <Route path='/Customer' element={<Customer />} />
</Routes>
</Router>
  );
}

export default App;
