import content from '/data/content.json';

export default function AboutMe() {
    return (
        <section className="flex flex-row justify-center px-32">
            <div className="flex flex-col w-[71rem]">
                <h2 className="text-[1.75rem] font-extrabold">About Me</h2>
                <div className="max-w-4xl text-[1.125rem] font-normal">
                    {content[0].text.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}