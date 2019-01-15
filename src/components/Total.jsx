import React from "react";

const Total = props => {
  //   countTotal () {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let totalPrice = props.counters
    .map(c => c.price * c.quantity)
    .reduce(reducer, 0);
  // return totalPrice;
  //   }
  return (
    <div className="form-row row">
      <span className="text-dark col-2"> Total: </span>
      <span className="text-danger col-1"> {totalPrice}</span>
    </div>
  );
};

export default Total;
