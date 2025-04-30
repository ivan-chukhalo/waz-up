import React from "react";
import "./Toggler.css";

const Toggler = ({ value, valueList, useAction }) => {
  return (
    <button className="toggler-btn" onClick={() => useAction()}>
      {valueList[value]}
    </button>
  );
};

export default Toggler;
