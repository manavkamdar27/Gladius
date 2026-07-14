import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Impact from "@/components/Impact";
import Judgments from "@/components/Judgments";
import Counsel from "@/components/Counsel";
import Footprint from "@/components/Footprint";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Impact />
        <Judgments />
        <Counsel />
        <Footprint />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
