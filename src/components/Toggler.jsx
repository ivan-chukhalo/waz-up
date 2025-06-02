import React from "react";
// import "./Toggler.css";

const Toggler = ({ value, valueList, useAction }) => {
  return (
    <button
    className="
      w-20 h-20 md:w-14 md:h-14
      border-0 rounded-full
      text-5xl md:text-3xl
      bg-[var(--element-background-color)]
      hover:bg-[var(--highlight-color)] hover:transition-all hover:duration-700 hover:ease-in-out
    "
      onClick={() => useAction()}
    >
      {valueList[value]}
    </button>
  );
};

export default Toggler;
