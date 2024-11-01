import {useState} from "react";

export default function Tool({ tool}) {
    // const [isFlipped, setIsFlipped] = useState(false);

    // const handleClick = () => {
    //     setIsFlipped(!isFlipped);
    // }

    return(
        <div className="flex justify-center items-center w-32 h-16 m-2 hover:scale-110">
            <img className="w-32 h-16 grayscale hover:filter-none" src={tool.icon} alt="tool logo"/>
        </div>
    )
}