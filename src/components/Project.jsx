export default function Project( {project} ) {
    return(
            <div className="w-full flex flex-row gap-12">
                <div className="w-[50%] h-[28rem] rounded-2xl">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row justify-center items-center rounded-lg font-poppins text-4xl font-extrabold bg-custom-linkedin-burgundy h-16 w-16">{project.id.toString().padStart(2, '0')}</div>  {/* adds a zero if id is single digit */}
                        <h2 className="font-poppins text-3xl">{project.title}</h2>
                        <p className="font-poppins text-lg">{project.description}</p>
                        <ul className="flex flex-row gap-2 font-poppins text-xl text-custom-github-dark-green font-bold">
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="w-[50%] h-[28rem] rounded-2xl shadow-xl">
                    <img src={project.images} alt={project.title} className="w-full h-full object-cover rounded-2xl"/>
                </div>
            </div>
    )
}