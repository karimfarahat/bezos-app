import React, { useContext, useState } from "react";
import TransactionContext from "../context/TransactionContext";
import TransactionItem from "./TransactionItem";
import InfiniteScroll from "react-infinite-scroller";
import { motion } from "framer-motion";

function TransactionList() {
  const { transaction } = useContext(TransactionContext);

  //state for currentpage handling
  const [currentPage, setCurrentPage] = useState(0);

  //handle more data
  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const endIndex = currentPage * 10;

  //slice the transactions to show only a portion
  const displayedData = transaction.slice(0, endIndex);

  return (
    <div className="container">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={displayedData.length < transaction.length}
      >
        {displayedData.map((item) => (
          //animation for transaction items
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <TransactionItem key={item.id} item={item} />
          </motion.div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default TransactionList;
