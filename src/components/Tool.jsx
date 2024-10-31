import {useState} from "react";

export default function Tool({ iconLink , tool }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return(
        <div className={`flex justify-center items-center w-32 h-16 m-2 border hover:scale-110 ${isFlipped ? 'animate-flip' : ''}`}
        onClick={handleClick}
        >
            {isFlipped ? <img src={iconLink} alt={`${tool.name} icon`}/> : tool.name}
        </div>
    )
}