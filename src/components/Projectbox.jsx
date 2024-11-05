export default function Projectbox() {

    return (
        <section className="flex flex-row justify-center px-32">
            <div className="flex flex-col w-[71rem]">
                <h2 className="text-[1.75rem] font-extrabold pb-6">Work</h2>
                <div className="max-w-4xl flex flex-row justify-between gap-4">
                    <div className="w-64 h-52 rounded-lg bg-custom-linkedin-burgundy shadow-md">Project 1</div>
                    <div className="w-64 h-52 rounded-lg bg-custom-linkedin-burgundy shadow-md">Project 2</div>
                    <div className="w-64 h-52 rounded-lg bg-custom-linkedin-burgundy shadow-md">Project 3</div>
                    <div className="w-64 h-52 rounded-lg bg-custom-linkedin-burgundy shadow-md">Project 4</div>
                </div>
            </div>
        </section>
    )
}