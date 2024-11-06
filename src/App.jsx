import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Footer from "./components/Footer.jsx";
import Projectbox from "./components/Projectbox.jsx";


function App() {

  return (
    <div className="flex flex-col mx-auto min-h-screen font-inter text-white gap-24 max-w-screen-xl">
        <Header />
        <Hero />
        <AboutMe />
        <Projectbox />
        <Toolbox />
        <Footer />
    </div>
  )
}

export default App
