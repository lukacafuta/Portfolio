import {useState} from "react";

export default function Tool({ tool }) {
    // state to manage popup visiibility
    const [showPopup, setShowPopup] = useState(false);

    // function to toggle popup visibility on click
    const handleIconClick = () => {
        setShowPopup(!showPopup);
    };

    return(
        <div className="relative flex flex-col justify-center items-center w-32 h-16 m-2 hover:scale-110 cursor-pointer">
            <img
                className="w-full h-full object-contain grayscale hover:filter-none"
                src={tool.icon}
                alt="tool logo"
                onClick={handleIconClick}
            />
            {showPopup && (
                <div className="absolute top-[-2rem] left-[90%] bg-gray-600 rounded shadow-lg p-2"
                    style={{ whiteSpace: 'nowrap' }} // keeps the popup text in a single line
                >
                    {tool.name}
                </div>
            )}
        </div>
    );
}