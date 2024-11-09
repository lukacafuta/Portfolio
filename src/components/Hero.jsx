export default function Hero({ theme }) {
  return (
    <section className="flex flex-row justify-between -mb-4">
        <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-extrabold pb-4 text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown">
                Sali, I'm Luka Cafuta
            </h1>
            <h2 className="text-2xl font-semibold pb-12 text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown">Full Stack Developer from Switzerland.</h2>
            <div className="flex flex-row gap-4">
                <a
                    href="https://www.linkedin.com/in/luka-cafuta"
                    target="_blank"
                    rel="noopener noreferrer" // This is a security measure to prevent malicious websites from accessing your data
                    className="flex flex-row items-center justify-center bg-custom-milk-chocolate-brown w-32 h-10 rounded-lg gap-2 text-md cursor-pointer hover:scale-110"
                >
                    <img src="/linkedin-logo-light-brown.svg" alt="LinkedIn button"/>
                    <div className="font-semibold text-custom-light-chocolate-brown">
                        LinkedIn
                    </div>
                </a>
                <a
                    href="https://github.com/lukacafuta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center w-32 h-10 border border-custom-milk-chocolate-brown rounded-lg gap-2 text-md cursor-pointer hover:scale-110"
                >
                    <img src={theme === 'light' ? "/github-logo-lightmode.svg" : "/github-logo-light-brown.svg"} alt="GitHub button"/>

                    <div className="font-semibold text-custom-dark-chocolate-brown dark:text-custom-light-chocolate-brown">
                        GitHub
                    </div>
                </a>
            </div>
        </div>
        <div>
        <img src={theme === 'light' ? "/profile-photo-lightmode.svg" : "/profile-photo-darkmode.svg"} alt="Profile photo"/>
        </div>
    </section>
  );
}