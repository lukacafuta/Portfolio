import tools from '/data/tools.json';
import Tool from "./Tool.jsx";



export default function Toolbox() {

    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-3xl font-extrabold mb-2 text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown">My Tools</h2>
                <div className="font-bold mb-8">
                    <p>
                        The tools and technologies I rely on.
                    </p>
                </div>
                <div className="flex flex-wrap w-full justify-between font-normal">
                    {tools.map((tool)=>(
                        <div key={tool.id} className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/5 mb-12">
                        <Tool tool={tool} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}