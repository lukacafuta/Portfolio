export default function Tool({ tool, isFlipped, onClick  }) {


    return(
        <div className={`flex justify-center items-center w-32 h-16 m-2 hover:scale-110 cursor-pointer ${
            isFlipped ? "animate-flip" : ""
        }`}
        onClick={onClick}
        >
            {isFlipped ? (
                <div className="flex justify-center items-center w-32 h-16">
                    <span className="text-center">{tool.name}</span>
                </div>
            ) : (
                <img className="w-32 h-16 grayscale hover:filter-none" src={tool.icon} alt="tool logo"/>
            )}
        </div>
    );
}