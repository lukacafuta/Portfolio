export default function ThemeToggleButton() {
    return (
        <div className="flex items-center space-x-2">
            <img src="/lightmode-icon.svg" alt="Light mode icon" className="w-6 h-6" />

            <div className="flex items-center cursor-pointer bg-custom-toggle-slider-grey w-14 h-8  rounded-full p-1">
                <div className="bg-custom-linkedin-burgundy w-6 h-6 rounded-full shadow-md"> </div>
            </div>

            <img src="/darkmode-icon.svg" alt="Dark mode icon"  className="w-6 h-6 ml-auto"/>
        </div>
    )
};