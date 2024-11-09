export default function ThemeToggleButton({ toggleTheme, theme}) {

    return (
        <div className="flex items-center space-x-2">
            <img
                src={theme === 'light' ? "/sun-dark-brown.svg" : "/sun-light-brown.svg"}
                alt="Light mode icon"
                className="w-6 h-6" />

            <div className="flex items-center cursor-pointer w-14 h-8 rounded-full p-1 bg-custom-dark-chocolate-brown dark:bg-custom-light-chocolate-brown"
                 onClick={toggleTheme}
            >
                <div className={`w-6 h-6 rounded-full shadow-md transform transition-transform bg-custom-milk-chocolate-brown ${
                    theme === 'light' ? "translate-x-0" : "translate-x-6"
                }`}
                ></div>
            </div>

            <img
                src={theme === 'light' ? "/moon-stars-dark-brown.svg" : "/moon-stars-light-brown.svg"}
                alt="Dark mode icon"
                className="w-6 h-6 ml-auto"/>
        </div>
    )
};