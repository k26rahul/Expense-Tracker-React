export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'INCREMENT_LAST_ID':
      return {
        ...state,
        lastTransactionId: state.lastTransactionId + 1,
      };
    default:
      return state;
  }
};
