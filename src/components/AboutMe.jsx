import content from '/data/content.json';

export default function AboutMe() {
    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-5xl font-extrabold">About Me</h2>
                <div className="w-full text-[1.125rem] font-normal">
                    {content[0].text.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}