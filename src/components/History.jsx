import React, { useContext } from 'react';
import HistoryItem from './HistoryItem';
import './css/History.css';
import { GlobalContext } from '../context/GlobalState';

export default function History() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history">
      <h2>History</h2>
      {transactions.length === 0 ? (
        <p className="no-transactions">Nothing in history</p>
      ) : (
        transactions.map(transaction => (
          <HistoryItem key={transaction.id} transaction={transaction} />
        ))
      )}
    </div>
  );
}
