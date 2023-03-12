import React, { useContext } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import TransactionContext from "../context/TransactionContext";

function TransactionItem({ item, isBezos }) {
  const { bezosMerchant } = useContext(TransactionContext);

  //if checkbox triggered, add company to be a Bezos company
  const handleCheckbox = (item) => {
    bezosMerchant.push(item.merchant_name);
  };

  return (
    <Card>
      <div className="amt-display">${item.amount}</div>
      <div className="text-display">{item.merchant_name}</div>
      <div className="righty">
        Is Bezos?{" "}
        <input onChange={handleCheckbox} type="checkbox" checked={isBezos} />
      </div>
      <div className="category">Categories: </div>
      <div className="text-smaller">
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
