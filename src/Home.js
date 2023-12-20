// Home.js

import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontFamily: 'Poppins', color: '#D3504A' }}>Expense Tracker</h1>
      <p>
        Welcome to the Expense Tracker application. Track your expenses easily and efficiently.
      </p>
      
      <section style={{ marginTop: '20px' }}>
        <h2>How to Use</h2>
        <p>
          1. Click on the "Expense Tracker" link to access the expense tracking features.
        </p>
        <p>
          2. In the Expense Tracker section, use the "Add New Expense" form to input your expenses.
        </p>
        <p>
          3. View your expense summary and distribution in the "Expense Summary" section.
        </p>
        {/* Add more instructions as needed */}
      </section>
      
      {/* You can add more content or sections here */}
    </div>
  );
};

export default Home;
