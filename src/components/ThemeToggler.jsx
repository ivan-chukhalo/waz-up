import React from "react";

import useTheme from "../hooks/useTheme";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  const buttonText = theme === "dark" ? `🌙` : `🌞`;

  return (
    <button className="toggler-btn" onClick={toggleTheme}>
      {buttonText}
    </button>
  );
};

export default ThemeToggler;
