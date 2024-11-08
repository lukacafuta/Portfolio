import tools from '/data/tools.json';
import Tool from "./Tool.jsx";



export default function Toolbox() {

    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-3xl font-extrabold mb-6">My Tools</h2>
                <div className="flex flex-wrap w-full justify-between font-normal">
                    {tools.map((tool)=>(
                        <div key={tool.id} className="flex justify-center items-center flex-grow-0 flex-shrink-0 basis-[18%] mb-12">
                        <Tool tool={tool} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}