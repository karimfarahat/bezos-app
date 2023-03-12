import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

function TransactionStats() {
  const { transaction, bezosMerchant } = useContext(TransactionContext);

  //Total amount for all transactions
  let totalTransactions = transaction.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  //Bezo's total transactions
  let average = transaction.reduce((acc, cur) => {
    if (bezosMerchant.indexOf(cur.merchant_name) > -1) {
      return acc + cur.amount;
    } else {
      return acc;
    }
  }, 0);

  //1 decimal point
  average = average.toFixed(1).replace(/[.,]0$/, "");

  //Percentage of Bezo's transactions
  let percentageTransactions = ((average / totalTransactions) * 100)
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <div className="righty">
      <h4>{transaction.length} transactions</h4>
      <h4>Ahmed's expenditure on Bezos': $ {isNaN(average) ? 0 : average}</h4>
      <h4>
        Bezos' share of Ahmed's expenditure:{" "}
        {isNaN(average) ? 0 : percentageTransactions + "%"}
      </h4>
    </div>
  );
}

export default TransactionStats;
