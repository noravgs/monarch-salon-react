import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Lookbook from "./components/Lookbook";


function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Services />
      <Lookbook />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
