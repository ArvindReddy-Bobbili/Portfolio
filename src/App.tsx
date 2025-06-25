import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-reveal').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-reveal').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;