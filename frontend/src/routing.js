// App.js or Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './App.js';
import ProjectsPage from './pages/ProjectsPage';
import Sections from './IndexSections';

function App() {
  return (
    <Router>
        <Sections />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}