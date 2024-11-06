export default function Projectbox() {

    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-[1.75rem] font-extrabold pb-6">Work</h2>
                <div className="w-full flex flex-row gap-12">
                    <div className="w-[50%] h-[28rem] rounded-2xl bg-custom-light-brown">
                        <div className="flex flex-col gap">
                            <div>ID</div>
                            <h2>TITLE</h2>
                            <p>DESCRIPTION</p>
                            <li>TECHNOLOGIES</li>
                        </div>
                    </div>
                    <div className="w-[50%] h-[28rem] rounded-2xl bg-custom-light-brown shadow-xl">
                        <div>Project</div>
                        <div className="flex flex-row gap-2">
                            <button className="border-2 cursor-pointer">next</button>
                            <button className="border-2 cursor-pointer">previous</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}