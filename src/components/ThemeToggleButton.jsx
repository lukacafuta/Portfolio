import {useState} from "react";

export default function ThemeToggleButton() {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
    };

    return (
        <div className="flex items-center space-x-2">
            <img src="/lightmode-icon.svg" alt="Light mode icon" className="w-6 h-6" />

            <div className="flex items-center cursor-pointer bg-custom-toggle-slider-grey w-14 h-8  rounded-full p-1" onClick={toggleTheme}>
                <div className={`w-6 h-6 rounded-full shadow-md transform transition-transform ${isLightMode ? 'translate-x-0 bg-custom-linkedin-burgundy' : 'translate-x-6 bg-custom-github-dark-green'}`}></div>
            </div>

            <img src="/darkmode-icon.svg" alt="Dark mode icon"  className="w-6 h-6 ml-auto"/>
        </div>
    )
};