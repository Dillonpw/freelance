import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/header";
import Contact from "../components/contact";
import Footer from "../components/footer";

export const Route = createFileRoute("/Contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
