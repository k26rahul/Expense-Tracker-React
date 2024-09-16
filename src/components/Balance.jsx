import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './css/Balance.css';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const formattedBalance = `$${balance.toFixed(2)}`;

  return (
    <div className="balance">
      <p>YOUR BALANCE</p>
      <p className="balance-amount">{formattedBalance}</p>
    </div>
  );
}
