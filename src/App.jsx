import './App.css';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddTransactionForm from './components/AddTransactionForm';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h1>Expense Tracker</h1>
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
