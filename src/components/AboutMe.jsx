import content from '/data/content.json';

export default function AboutMe() {
    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-3xl font-extrabold mb-6">About Me</h2>
                <div className="w-full font-normal">
                    {content[0].text.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}