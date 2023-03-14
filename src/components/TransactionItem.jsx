import React, { useContext } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import TransactionContext from "../context/TransactionContext";

function TransactionItem({ item }) {
  const { handleCheckbox, bezosMerchant } = useContext(TransactionContext);

  //if checkbox triggered, add company to be a Bezos company
  const isBezos = bezosMerchant.includes(item.merchant_name);

  return (
    <Card>
      <div className="amt-display">${item.amount}</div>
      <div className="text-display">{item.merchant_name}</div>
      <div className="righty">
        Is Bezos?{" "}
        {/* calls the handleCheckbox fom the context and checks the isBezos status to either mark or not */}
        <input
          onClick={() => handleCheckbox(item)}
          type="checkbox"
          checked={isBezos}
        />
      </div>
      <div className="category">Categories: </div>
      <div className="text-smaller">
        {/* show categories in a decent list */}
        {item.category.map((item) => (
          <li className="categories">{item}</li>
        ))}
      </div>

      <div className="text-left">
        {"Date: "}
        {item.date}
      </div>
    </Card>
  );
}

TransactionItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TransactionItem;
