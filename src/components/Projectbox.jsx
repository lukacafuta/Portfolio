import projects from "/data/projects.json";
import Project from "./Project.jsx";


export default function Projectbox() {

    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-5xl font-extrabold pb-6">Work</h2>
                {projects.map((project) => (
                    <div key={project.id}>
                    <Project project={project}/>
                    </div>
                ))}
            </div>
        </section>
    )
}