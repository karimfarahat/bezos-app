import React, { useContext, useState } from "react";
import TransactionContext from "../context/TransactionContext";
import TransactionItem from "./TransactionItem";
import InfiniteScroll from "react-infinite-scroller";
import { motion, AnimatePresence } from "framer-motion";

function TransactionList() {
  const { transaction, bezosMerchant } = useContext(TransactionContext);

  return (
    <div className="container">
      {transaction.map((item) =>
        bezosMerchant.indexOf(item.merchant_name) > -1 ? (
          <TransactionItem key={item.id} item={item} isBezos={true} />
        ) : (
          <TransactionItem key={item.id} item={item} isBezos={false} />
        )
      )}
    </div>
  );
}

export default TransactionList;
