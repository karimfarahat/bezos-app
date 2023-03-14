import { createContext, useEffect, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  //state for storing the fetched data in array
  const [transaction, setTransaction] = useState([]);
  // const [isBezos, setIsBezos] = useState();
  const [bezosMerchant, setBezosMerchant] = useState([
    "Amazon",
    "Washington Post",
    "Whole Foods",
    "Blue Origin",
  ]);

  // Fetching JSON db
  const fetchTransactions = async () => {
    const response = await fetch(
      `https://hadiziady.github.io/bezos_mock_api/mock_api.json`
    );

    //awaiting http response
    const data = await response.json();

    // mapping the initial 4 merchants with the checkbox (isBezos value) for transactions
    const bezosedItems = data.map((item) => {
      if (bezosMerchant.includes(item.merchant_name))
        return {
          ...item,
          isBezos: true,
        };
      else {
        return {
          ...item,
          isBezos: false,
        };
      }
    });

    //Sort Data by date
    setTransaction(
      bezosedItems.sort((a, b) => new Date(a.date) - new Date(b.date))
    );
  };

  //invoked when app is init and only re-fetch when bezosMerchants array changes
  useEffect(() => {
    fetchTransactions();
  }, [bezosMerchant]);

  const handleCheckbox = (item) => {
    if (!bezosMerchant.includes(item.merchant_name)) {
      setBezosMerchant([...bezosMerchant, item.merchant_name]);
    } else if (bezosMerchant.includes(item.merchant_name)) {
      setBezosMerchant(
        bezosMerchant.filter((name) => name !== item.merchant_name)
      );
    }
  };

  //passing the transactions, bezos merchants, and the handle check box with the provider
  return (
    <TransactionContext.Provider
      value={{
        transaction,
        bezosMerchant,
        handleCheckbox,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
