import projects from "/data/projects.json";
import Project from "./Project.jsx";
import {useState} from "react";


export default function Projectbox() {

    // state to keep track of the current/displayed project
    const[currentProject, setCurrentProject] = useState(0);

    // functions to handle next/previous buttons
    const handleNext = () => {
        setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    };

    const handlePrevious = () => {
        setCurrentProject((prevProject) => (prevProject - 1 + projects.length) % projects.length);
    };

    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-5xl font-extrabold pb-6">Work</h2>
                <div>
                    <Project project={projects[currentProject]} />
                </div>
                <div className="flex flex-row gap-4 justify-center mt-8">
                    <button onClick={handlePrevious} aria-label="Next Project" className="cursor-pointer">
                        <img src="/arrow-left-chevron-lightmode.svg" alt="arrow left" className="w-8 h-8" />
                    </button>
                    <button onClick={handleNext} aria-label="Next Project" className="cursor-pointer">
                        <img src="/arrow-right-chevron-lightmode.svg" alt="arrow right" className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </section>
    )
}