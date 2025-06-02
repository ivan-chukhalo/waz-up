const Toggler = ({ value, valueList, useAction }) => {
  return (
    <button
    className="
      w-20 h-20 sm:w-14 sm:h-14
      border-0 rounded-full
      text-5xl sm:text-3xl
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
