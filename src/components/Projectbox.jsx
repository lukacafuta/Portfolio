import projects from "/data/projects.json";
import Project from "./Project.jsx";
import {useState} from "react";


export default function Projectbox({ theme }) {

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
        <section className="flex justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-3xl font-extrabold mb-6 text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown">Work</h2>
                <div>
                    <Project project={projects[currentProject]} />
                </div>
                <div className="flex flex-row gap-8 justify-center mt-8">
                    <button
                        onClick={handlePrevious}
                        aria-label="Previous Project"
                        className="flex flex-row items-center justify-center w-16 h-10 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 shadow-md shadow-custom-dark-chocolate-brown/50 dark:shadow-custom-light-chocolate-brown/30">
                        <img
                            src={theme === 'light' ? "/arrow-left-dark-brown.svg" : "/arrow-left-light-brown.svg"}
                            alt="arrow left"
                            className="w-8 h-8"
                        />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next Project"
                        className="flex flex-row items-center justify-center w-16 h-10 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-300 shadow-md shadow-custom-dark-chocolate-brown/50 dark:shadow-custom-light-chocolate-brown/30">
                        <img
                            src={theme === 'light' ? "/arrow-right-dark-brown.svg" : "/arrow-right-light-brown.svg"}
                            alt="arrow right"
                            className="w-8 h-8"
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}