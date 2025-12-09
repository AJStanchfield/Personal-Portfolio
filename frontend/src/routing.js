// App.js or Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './App.js';
import Analytics from './pages/analytics.js';
import Sections from './IndexSections';

function Routing() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyticschart" element={<Analytics />} />
      </Routes>
  );
}

export default Routing;