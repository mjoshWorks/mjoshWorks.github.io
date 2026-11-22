import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import { profile } from './data/resume';

const year = new Date().getFullYear();

export default function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />

        <footer className="footer">
          © {year} {profile.name}. Built with React, TypeScript &amp; Vite.
        </footer>
      </main>
    </div>
  );
}
