// ExpenseTracker.js

import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        {/* Left side - ExpenseForm */}
        <ExpenseForm addExpense={addExpense} />
      </div>
      <div style={{ flex: 1 }}>
        {/* Right side - ExpenseList */}
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpenseTracker;
