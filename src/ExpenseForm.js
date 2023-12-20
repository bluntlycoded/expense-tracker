// ExpenseForm.js

import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('groceries');
  // Set the default value to the current date
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) return;
    const newExpense = {
      id: new Date().getTime(),
      description,
      amount: parseFloat(amount),
      category,
      date,
    };
    addExpense(newExpense);
    setDescription('');
    setAmount('');
    setCategory('groceries');
    // Set the default value to the current date after submitting the form
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className="expense-form-container">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="groceries">Groceries</option>
            <option value="stationery">Stationery</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Bills">Bills</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <br />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
