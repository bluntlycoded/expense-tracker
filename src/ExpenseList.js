// ExpenseList.js

import './ExpenseList.css';

// ExpenseList.js

import React, { useEffect, useMemo, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Chart from 'chart.js/auto';
const ChartCanvas = React.memo(({ chartData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    const existingChart = Chart.getChart(ctx);

    if (existingChart) {
      existingChart.destroy();
    }

    new Chart(ctx, {
      type: 'pie',
      data: chartData,
    });
  }, [chartData]);

  return <canvas ref={canvasRef} width="400" height="400" style={{ maxWidth: '100%' }} />;
});

const ExpenseList = ({ expenses }) => {
  // Calculate expenses by category
  const expensesByCategory = useMemo(() => {
    const result = {};
    expenses.forEach((expense) => {
      if (!result[expense.category]) {
        result[expense.category] = [];
      }
      result[expense.category].push(expense);
    });
    return result;
  }, [expenses]);

  // Prepare data for the pie chart
  const chartData = useMemo(() => {
    return {
      labels: Object.keys(expensesByCategory),
      datasets: [
        {
          data: Object.values(expensesByCategory).map(
            (categoryExpenses) =>
              categoryExpenses.reduce((total, expense) => total + expense.amount, 0)
          ),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            // You can add more colors here if needed
          ],
        },
      ],
    };
  }, [expensesByCategory]);

  const downloadPDF = () => {
    // ... (unchanged)

  };

  return (
    <div>
      <h2>Expense Summary</h2>
      <div style={{ display: 'flex' }}>
        <Tabs>
          <TabList>
            {Object.keys(expensesByCategory).map((category) => (
              <Tab key={category}>{category}</Tab>
            ))}
          </TabList>
          <div>
            {Object.keys(expensesByCategory).map((category) => (
              <TabPanel key={category}>
                <h3>{category} Expenses</h3>
                <ul>
                  {expensesByCategory[category].map((expense) => (
                    <li key={expense.id}>
                      {expense.description}: ₹{expense.amount.toFixed(2)} - Date: {expense.date}
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </div>
        </Tabs>
        <div style={{ marginLeft: '20px' }}>
          <h2>Expense Distribution</h2>
          <ChartCanvas chartData={chartData} />
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button className='dbt' onClick={downloadPDF}>Download as PDF</button>
      </div>
    </div>
  );
};

export default ExpenseList;
