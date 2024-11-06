export default function Project( {project} ) {
    return(
            <div className="w-full flex flex-row gap-12">
                <div className="w-[50%] h-[28rem] rounded-2xl">
                    <div className="flex flex-col gap-8">
                        <div className="font-poppins text-4xl font-extrabold text-custom-linkedin-burgundy">{project.id.toString().padStart(2, '0')}</div>  {/* adds a zero if id is single digit */}
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
                    <div>Project image</div>
                </div>
            </div>
    )
}