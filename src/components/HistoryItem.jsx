import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function HistoryItem({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const { id, label, amount } = transaction;
  const isPositive = amount > 0;

  return (
    <div className={`history-item ${isPositive ? 'positive' : 'negative'}`}>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>
        X
      </button>
      <div className="history-item-content">
        <span>{label}</span>
        <span>{amount > 0 ? `+${amount}` : amount}</span>
      </div>
    </div>
  );
}
