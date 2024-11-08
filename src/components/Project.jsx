export default function Project( {project} ) {
    return(
            <div className="w-full flex flex-row gap-12">
                <div className="flex flex-col justify-between w-[50%] h-[28rem]">
                    <div
                        className="flex flex-row justify-center items-center rounded-lg text-4xl font-extrabold bg-custom-milk-chocolate-brown h-16 w-16">{project.id.toString().padStart(2, '0')}</div>
                    {/* adds a zero if id is single digit */}
                    <h2 className="text-2xl">{project.title}</h2>
                    <div>{project.description}</div>
                    <ul className="flex flex-row gap-2 text-xl text-custom-milk-chocolate-brown font-bold flex-wrap">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div>
                        {/*empty div because sizing with laptop is off*/}
                    </div>
                </div>
                <div className="w-[50%] h-[28rem] flex justify-center items-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={project.images}
                            alt={project.title}
                            className="hover:scale-110"
                        />
                    </a>
                </div>
            </div>
    )
}