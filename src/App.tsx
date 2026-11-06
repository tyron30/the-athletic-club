import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Assessment from "./components/Assessment";
import Membership from "./components/Membership";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    // reducedMotion="user" => animations are skipped for visitors who disable motion in their OS
    <MotionConfig reducedMotion="user">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Assessment />
        <Membership />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
