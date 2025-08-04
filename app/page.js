import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from './components/Services';
import Work from "./components/Work";
import ContactFrom from "./components/ContactFrom";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Services />
      <Work />
      <ContactFrom />
    </>
  );
}
