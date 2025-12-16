// App.js or Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import HomePage from './App.js';
import Analytics from './pages/analytics.js';
import eoyReview from './pages/eoyreview.js';


function Routing() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyticschart" element={<Analytics />} />
        <Route path="/eoyreview" element={<eoyReview/>} />
      </Routes>
  );
}

export default Routing;