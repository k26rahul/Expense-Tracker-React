import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './css/IncomeExpense.css';

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0)
    .toFixed(2);

  return (
    <div className="income-expense">
      <div className="income">
        <p>INCOME</p>
        <p className="income-amount">${income}</p>
      </div>
      <div className="expense">
        <p>EXPENSE</p>
        <p className="expense-amount">${expense}</p>
      </div>
    </div>
  );
}
