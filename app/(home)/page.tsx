import { Inter } from "next/font/google";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
