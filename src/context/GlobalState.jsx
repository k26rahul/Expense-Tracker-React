import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { initialState } from './initialState';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, initial => {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      return JSON.parse(savedState);
    }
    return initial;
  });

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    const newTransaction = {
      ...transaction,
      id: state.lastTransactionId + 1,
    };
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: newTransaction,
    });
    dispatch({
      type: 'INCREMENT_LAST_ID',
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
