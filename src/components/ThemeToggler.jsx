import React from "react";
import './ThemeToggler.css'

import useTheme from "../hooks/useTheme";

const ThemeToogler = () => {
  const { theme, toggleTheme } = useTheme();
  const buttonText = theme === "dark" ? `🌙` : `🌞`;

  return <button onClick={toggleTheme}>{buttonText}</button>;
};

export default ThemeToogler;
