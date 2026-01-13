import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="
        flex items-center gap-2
        px-3 py-2 sm:px-4
        rounded-full
        bg-gray-400 dark:bg-gray-700
        text-sm sm:text-base
        dark:text-white
        transition duration-300
      "
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkMode;
