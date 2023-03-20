import { Inter } from "next/font/google";
import About from "./(home)/about";
import Contact from "./(home)/contact";
import Projects from "./(home)/projects";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
