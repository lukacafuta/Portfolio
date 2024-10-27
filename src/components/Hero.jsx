export default function Hero() {
  return (
    <section className="flex flex-row justify-center px-32">
        <div className="flex flex-col justify-center pr-32">
            <h1 className="text-[3.75rem] font-extrabold">Hi, I'm Luka!</h1>
            <h2 className="text-[1.75rem] font-semibold pb-4">Full Stack Developer from Switzerland.</h2>
            <div className="flex flex-row gap-4 font-poppins">
                <button className="flex flex-row items-center justify-center bg-custom-linkedin-brown w-[7.5rem] h-[2.5rem] rounded-lg gap-2 text-md font-semibold cursor-pointer">
                    <img src="/linkedin-logo.svg" alt="linkedin-logo"/>
                    LinkedIn
                </button>
                <button className="flex flex-row items-center justify-center bg-custom-github-green w-[7.5rem] h-[2.5rem] rounded-lg gap-2 text-md font-semibold cursor-pointer">
                    <img src="/github-logo.svg" alt="github-logo"/>
                    GitHub
                </button>
            </div>
        </div>
        <div>
            <img src="/profile-photo.svg" alt="profile-photo"/>
        </div>
    </section>
  );
}