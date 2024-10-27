export default function Hero() {
  return (
    <section className="flex flex-row justify-center px-32">
        <div className="flex flex-col justify-center pr-32">
            <h1 className="text-[3.75rem] font-extrabold">Hi, I'm Luka!</h1>
            <h2 className="text-[1.75rem] font-semibold pb-4">Full Stack Developer from Switzerland.</h2>
            <div className="flex flex-row gap-4 font-poppins">
                <a
                    href="https://www.linkedin.com/in/luka-cafuta"
                    target="_blank"
                    rel="noopener noreferrer" // This is a security measure to prevent malicious websites from accessing your data
                    className="flex flex-row items-center justify-center bg-custom-linkedin-brown w-[7.5rem] h-[2.5rem] rounded-lg gap-2 text-md font-semibold cursor-pointer hover:scale-110"
                >
                    <img src="/linkedin-logo.svg" alt="linkedin-logo"/>
                    LinkedIn
                </a>
                <a
                    href="https://github.com/lukacafuta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center bg-custom-github-green w-[7.5rem] h-[2.5rem] rounded-lg gap-2 text-md font-semibold cursor-pointer hover:scale-110"
                >
                    <img src="/github-logo.svg" alt="github-logo"/>
                    GitHub
                </a>
            </div>
        </div>
        <div>
            <img src="/profile-photo.svg" alt="profile-photo"/>
        </div>
    </section>
  );
}