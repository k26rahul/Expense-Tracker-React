import React, { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './css/AddTransactionForm.css';

export default function AddTransactionForm() {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const endOfPageRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount) {
      return;
    }

    const newTransaction = {
      label: text,
      amount: Number(amount),
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
    if (endOfPageRef.current) {
      endOfPageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateRandomExpense = () => {
    const randomAmount = Math.floor(Math.random() * 1000) + 1;
    setText('Expense');
    setAmount(-randomAmount);
  };

  const generateRandomIncome = () => {
    const randomAmount = Math.floor(Math.random() * 1000) + 1;
    setText('Income');
    setAmount(randomAmount);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Add new transaction</h2>
        <div className="random-btn-container">
          <button
            type="button"
            className="random-btn expense-btn"
            onClick={generateRandomExpense}
          >
            Add Random Expense
          </button>
          <button
            type="button"
            className="random-btn income-btn"
            onClick={generateRandomIncome}
          >
            Add Random Income
          </button>
        </div>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          placeholder="Enter text..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <label htmlFor="amount">
          Amount (negative - expense, positive - income)
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount..."
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button type="submit">Add transaction</button>
      </form>
      <div ref={endOfPageRef} />
    </div>
  );
}
