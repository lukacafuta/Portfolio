import ThemeToggleButton from "./ThemeToggleButton.jsx";

export default function Header() {
  return (
      <header className="flex flex-row justify-between w-full pt-14">
          <div>
                <img src="/luca-logo-darkmode.svg" alt="Luca logo"/>
          </div>
          <div>
                <ThemeToggleButton />
          </div>
      </header>
  );
}