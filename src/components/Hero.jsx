export default function Hero() {
  return (
    <section className="flex flex-row justify-center px-32">
        <div className="flex flex-col justify-center pr-32">
            <h1 className="text-[3.75rem] font-extrabold">Hi, I'm Luka!</h1>
            <h2 className="text-[1.75rem] font-semibold pb-4">Full Stack Developer from Switzerland.</h2>
            <div className="flex flex-row gap-4">
                <a
                    href="https://www.linkedin.com/in/luka-cafuta"
                    target="_blank"
                    rel="noopener noreferrer" // This is a security measure to prevent malicious websites from accessing your data
                    className="cursor-pointer hover:scale-110"
                >
                    <img src="/linkedin-button.svg" alt="LinkedIn button"/>
                </a>
                <a
                    href="https://github.com/lukacafuta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:scale-110"
                >
                    <img src="/github-button.svg" alt="GitHub button"/>
                </a>
            </div>
        </div>
        <div>
            <img src="/profile-photo.svg" alt="Profile photo"/>
        </div>
    </section>
  );
}