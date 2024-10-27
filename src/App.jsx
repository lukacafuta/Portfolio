import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Footer from "./components/Footer.jsx";
import Projectbox from "./components/Projectbox.jsx";


function App() {

  return (
    <div className="flex flex-col items-center min-h-screen w-screen bg-custom-dark-brown font-inter text-white px-8 gap-24">
        <Header />
        <Hero />
        <AboutMe />
        {/*<Projectbox />*/}
        <Toolbox />
        <Footer />
    </div>
  )
}

export default App
