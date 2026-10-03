import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Intro from "./Components/Intro";
import Benefits from "./Components/Benefits";
import Stats from "./Components/Stats";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="overflow-hidden">
      <Hero>
        <Navbar />
      </Hero>

      <Intro />
      <Benefits />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;