import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    document.documentElement.classList.toggle("dark", theme === "dark");
  };

  return { theme, toggleTheme };
}
