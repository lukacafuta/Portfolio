export default function Tool({ tool }) {

    return(
        <div className="flex flex-col justify-center items-center w-32 h-16 m-2 hover:scale-110 cursor-pointer">
            <img className="w-full h-full object-contain grayscale hover:filter-none" src={tool.icon} alt="tool logo"/>
        </div>
    );
}