import React from "react";

const Toggler = ({ value, valueList, useAction }) => {
  return (
    <button className="toggler-btn" onClick={() => useAction()}>
      {valueList[value]}
    </button>
  );
};

export default Toggler;
