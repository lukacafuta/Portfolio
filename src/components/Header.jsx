import ThemeToggleButton from "./ThemeToggleButton.jsx";

export default function Header({ toggleTheme, theme }) {
  return (
      <header className="relative flex flex-row w-full pt-8 md:pt-16">
          {/* logo and theme toggle button container */}
          <div className="flex flex-row justify-between items-center w-full">
              <div>
                  <img
                      src={theme === 'light' ? "/luca-logo-lightmode.svg" : "/luca-logo-darkmode.svg"}
                      alt="Luca logo"
                      className="w-32 h-10"
                  />
              </div>

              <div className="flex md:pr-16">
                  <ThemeToggleButton
                      toggleTheme={toggleTheme}
                      theme={theme}
                  />
              </div>
          </div>
        {/* Ribbon */}
          <div className="absolute top-0 right-0">
              <img src="/ribbon.svg"
                   alt="Ribbon"
                   className="w-4 h-8 md:w-8 md:h-12 lg:w-12 lg:h-16"
              />
          </div>
      </header>
  );
}