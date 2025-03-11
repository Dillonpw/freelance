import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Services from "../components/services";
import Benefits from "../components/benefits";
import Process from "../components/process";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Pricing from "../components/pricing";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
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
