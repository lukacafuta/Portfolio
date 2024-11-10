export default function Project( {project} ) {
    return(
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex flex-col justify-between w-full md:w-[50%] h-auto md:h-[28rem]">
                    <div
                        className="flex flex-row justify-center items-center rounded-lg text-3xl md:text-4xl font-extrabold h-12 md:h-16 w-12 md:w-16 bg-custom-milk-chocolate-brown text-custom-light-chocolate-brown">
                        {project.id.toString().padStart(2, '0')} {/* adds a zero if id is single digit */}
                    </div>
                    <h2
                        className="text-xl md:text-2xl text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown mt-4 md:mt-0">
                        {project.title}
                    </h2>
                    <div
                        className="text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown mt-2 md:mt-0">
                        {project.description}
                    </div>
                    <ul
                        className="flex flex-row gap-2 text-base md:text-lg lg:text-xl font-bold flex-wrap text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown mt-4 md:mt-0"
                    >
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div>
                        {/*empty div because sizing with laptop is off*/}
                    </div>
                </div>
                <div className="w-full md:w-[50%] h-auto md:h-[28rem] flex justify-center items-center mt-4 md:mt-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={project.images}
                            alt={project.title}
                            className="w-full h-auto object-cover hover:scale-110 transition-transform duration-200"
                        />
                    </a>
                </div>
            </div>
    )
}