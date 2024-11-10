import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Footer from "./components/Footer.jsx";
import Projectbox from "./components/Projectbox.jsx";
import {useEffect, useState} from "react";
import TagManager from "react-gtm-module/dist/TagManager.js";


function App() {

    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        TagManager.initialize({gtmId: 'GTM-NJ244G6S'});
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);

    window.dataLayer.push({
            event: 'theme_toggle',
            theme: newTheme,
    });
};

  return (
    <div className={`flex flex-col mx-auto min-h-screen font-inter gap-16 md:gap-32 max-w-screen-lg px-8 xl:p-0 ${theme}`}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Hero theme={theme} />
        <AboutMe theme={theme} />
        <Toolbox theme={theme} />
        <Projectbox theme={theme} />
        <Footer theme={theme} />
    </div>
  )
}

export default App
