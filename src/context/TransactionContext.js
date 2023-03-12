import { createContext, useEffect, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  //state for storing the fetched data in array
  const [transaction, setTransaction] = useState([]);

  //Bezo's initial Companies
  let bezosMerchant = [
    "Amazon",
    "Washington Post",
    "Whole Foods",
    "Blue Origin",
  ];

  // Fetching JSON db
  const fetchTransactions = async () => {
    const response = await fetch(
      `https://hadiziady.github.io/bezos_mock_api/mock_api.json`
    );

    //awaiting http response
    const data = await response.json();

    //Sort Data by date
    setTransaction(data.sort((a, b) => new Date(a.date) - new Date(b.date)));
  };

  //invoked when app is init
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        bezosMerchant,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
