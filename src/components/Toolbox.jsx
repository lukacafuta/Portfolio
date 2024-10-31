import tools from '/data/tools.json';
import Tool from "./Tool.jsx";


export default function Toolbox() {

    return (
    <section className="flex flex-row justify-center px-32">
        <div className="flex flex-col w-[71rem]">
            <h2 className="text-[1.75rem] font-extrabold">My Tools</h2>
            <div className="grid grid-cols-5 w-full gap-12 w-[54.5rem] text-[1.125rem] font-normal">
                {tools.map((tool)=>(
                    <Tool key={tool.id} iconLink={tool["icon-link"]} tool={tool}/>
                ))}
            </div>
        </div>
    </section>
  );
}