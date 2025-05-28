import React from "react";
// import "./Toggler.css";

const Toggler = ({ value, valueList, useAction }) => {
  return (
    <button
      className="
    text-3xl
    border-0
    w-12
    h-12
    rounded-full
    bg-[var(--element-background-color)]
    hover:bg-[var(--highlight-color)]
    hover:transition-all
    hover:duration-700
    hover:ease-in-out
    "
      onClick={() => useAction()}
    >
      {valueList[value]}
    </button>
  );
};

export default Toggler;
