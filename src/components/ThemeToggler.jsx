import React from "react";
import Toggler from "./Toggler";
import useTheme from "../hooks/useTheme";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  const valueList = {
    light: `🌞`,
    dark: `🌙`,
  };

  return (
    <Toggler value={theme} valueList={valueList} useAction={toggleTheme} />
  );
};

export default ThemeToggler;
