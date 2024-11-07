export default function Tool({ tool }) {

    return(
        <div className="relative flex flex-col justify-center items-center w-32 h-16 m-2 hover:scale-110 cursor-pointer group">
            <img className="w-32 h-16 grayscale hover:filter-none" src={tool.icon} alt="tool logo"/>
            <span className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins">{tool.name}</span>
        </div>
    );
}