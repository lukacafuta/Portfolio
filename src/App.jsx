import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Toolbox from "./components/Toolbox.jsx";
import Footer from "./components/Footer.jsx";
import Projectbox from "./components/Projectbox.jsx";


function App() {

  return (
    <div>
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
