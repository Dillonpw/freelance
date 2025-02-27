import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Services from "./components/services";
import Benefits from "./components/benefits";
import Process from "./components/process";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Pricing from "./components/pricing";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
