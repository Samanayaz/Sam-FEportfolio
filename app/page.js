import Image from "next/image";
import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar";
import About from "./components/about";
import ProjectSection from "./components/projectSection";
import Contact from "./components/contact";
import SimpleContact from "./components/simpleContact";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">

      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <About />
        <ProjectSection />
        {/* <Contact /> */}
        <SimpleContact />
       
      </div>
      <Footer />
    </main>
  );
}
