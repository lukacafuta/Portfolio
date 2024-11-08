import {useEffect, useRef, useState} from "react";

export default function Tool({ tool }) {
    // state to manage popup visiibility
    const [showPopup, setShowPopup] = useState(false);

    // ref to keep track of the component
    const toolRef = useRef(null);

    // function to toggle popup visibility on click
    const handleIconClick = () => {
        setShowPopup(!showPopup);
    };

    // useEffect to close the popup when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (toolRef.current && !toolRef.current.contains(event.target)) {
                setShowPopup(false); // close the popup
            }
        };

        // add event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);

        // remove event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div
            ref={toolRef} // attach ref to the root div
            className="relative flex flex-col justify-center items-center w-32 h-16 m-2 hover:scale-110 cursor-pointer">
            <img
                className="w-full h-full object-contain grayscale hover:filter-none"
                src={tool.icon}
                alt="tool logo"
                onClick={handleIconClick}
            />
            {showPopup && (
                <div className="absolute top-[-2rem] left-[90%] bg-custom-milk-chocolate-brown rounded shadow-lg p-2"
                    style={{ whiteSpace: 'nowrap' }} // keeps the popup text in a single line
                >
                    {tool.name}
                </div>
            )}
        </div>
    );
}