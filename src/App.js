// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ExpenseTracker from './ExpenseTracker';
import Home from './Home'; // Assuming you have a Home component
import About from './About'; // Assuming you have an About component
import Contact from './Contact'; // Assuming you have a Contact component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
};

export default App;
