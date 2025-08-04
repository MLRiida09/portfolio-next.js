import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from './components/Services';
import Work from "./components/Work";
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Services />
      <Work />
      <ContactSection />
    </>
  );
}
