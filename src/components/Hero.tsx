import { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleExploreClick = () => {
    const experienceSection = document.querySelector('#experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Profile Image with floating animation */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
          <img
            className="w-full h-full object-cover rounded-full"
            src="/Portfolio/pp.png"
            alt="Profile"
          />
        </div>

        {/* Greeting */}
        <h2 className="text-xl md:text-2xl font-medium text-black dark:text-white mb-6">
          Hi I'm Arvind
        </h2>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-8 max-w-4xl leading-tight">
          Solving Problems Through<br />
          Code, Data<br />
          & Artificial Intelligence.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
          A Software Engineer with experience in full-stack development, product thinking, and building for scale.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleExploreClick}
          className={cn(
            "px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium",
            "hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white",
            "border-2 border-black dark:border-white transition-all duration-300"
          )}
        >
          LET'S EXPLORE
        </button>
      </div>
    </section>
  );
};

export default Hero;