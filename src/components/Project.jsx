export default function Project( {project} ) {
    return(
            <div className="w-full flex flex-row gap-12">
                <div className="flex flex-col justify-between w-[50%] h-[28rem]">
                    <div
                        className="flex flex-row justify-center items-center rounded-lg font-poppins text-4xl font-extrabold bg-custom-linkedin-burgundy h-16 w-16">{project.id.toString().padStart(2, '0')}</div>
                    {/* adds a zero if id is single digit */}
                    <h2 className="font-poppins text-3xl">{project.title}</h2>
                    <p className="font-poppins text-lg">{project.description}</p>
                    <ul className="flex flex-row gap-2 font-poppins text-xl text-custom-github-dark-green font-bold flex-wrap">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div>
                        {/*empty div because sizing with laptop is off*/}
                    </div>
                </div>
                <div className="w-[50%] h-[28rem] flex justify-center items-center">
                        <img
                            src={project.images}
                            alt={project.title}
                            className="w-full h-full"
                        />
                </div>
            </div>
    )
}