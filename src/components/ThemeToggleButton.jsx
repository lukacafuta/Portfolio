import {useState} from "react";

export default function ThemeToggleButton() {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div className="flex items-center space-x-2">
            <img src="/lightmode-icon.svg" alt="Light mode icon" className="w-6 h-6" />

            <div className="flex items-center cursor-pointer bg-custom-light-chocolate-brown w-14 h-8 rounded-full p-1"
                 onClick={toggleTheme}
            >
                <div className={`w-6 h-6 rounded-full shadow-md transform transition-transform bg-custom-milk-chocolate-brown ${isLightMode ? 'translate-x-0' : 'translate-x-6'}`}></div>
            </div>

            <img src="/darkmode-icon.svg" alt="Dark mode icon"  className="w-6 h-6 ml-auto"/>
        </div>
    )
};