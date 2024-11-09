import ThemeToggleButton from "./ThemeToggleButton.jsx";

export default function Header({ toggleTheme, theme}) {
  return (
      <header className="flex flex-row justify-between w-full pt-14">
          <div>
                <img
                    src={theme === 'light' ? "/luca-logo-lightmode.svg" : "/luca-logo-darkmode.svg"}
                    alt="Luca logo" />
          </div>
          <div>
                <ThemeToggleButton
                    toggleTheme={toggleTheme}
                    theme={theme}
                />
          </div>
      </header>
  );
}