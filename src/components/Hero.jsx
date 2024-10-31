export default function Hero() {
  return (
    <section className="flex flex-row justify-center px-32">
        <div className="flex flex-col justify-center pr-32">
            <h1 className="text-[3.75rem] font-extrabold">Hi, I'm Luka!</h1>
            <h2 className="text-[1.75rem] font-semibold pb-8">Full Stack Developer from Switzerland.</h2>
            <div className="flex flex-row gap-4">
                <a
                    href="https://www.linkedin.com/in/luka-cafuta"
                    target="_blank"
                    rel="noopener noreferrer" // This is a security measure to prevent malicious websites from accessing your data
                    className="flex flex-row items-center justify-center bg-custom-linkedin-brown w-32 h-10 rounded-lg gap-2 text-md cursor-pointer hover:scale-110"
                >
                    <img src="/linkedin-logo.svg" alt="LinkedIn button"/>
                    <div className="font-semibold font-poppins">
                        LinkedIn
                    </div>
                </a>
                <a
                    href="https://github.com/lukacafuta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center bg-custom-github-green w-32 h-10 rounded-lg gap-2 text-md cursor-pointer hover:scale-110"
                >
                    <img src="/github-logo.svg" alt="GitHub button"/>
                    <div className="font-semibold font-poppins">
                        GitHub
                    </div>
                </a>
            </div>
        </div>
        <div>
        <img src="/profile-photo.svg" alt="Profile photo"/>
        </div>
    </section>
  );
}