import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";
  const iconTheme = theme === "light" ? "moon" : "sun";

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div onClick={() => setTheme(nextTheme)}>
      <span>{nextTheme.toUpperCase()}</span>
      <img
        className="img-mode"
        src={`/assets/icon-${iconTheme}.svg`}
        alt={iconTheme}
      ></img>
    </div>
  );
};

export default ThemeSwitcher;
