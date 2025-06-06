import { useEffect, useRef } from 'react';
import { techData } from '../data/techStack';
import TechIcon from './TechIcon';

const TechStack = () => {
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

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="py-20 transition-all duration-700 opacity-0 translate-y-10 bg-secondary-50 dark:bg-secondary-800/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-secondary-600 dark:text-secondary-300">
            Here are the technologies I work with on a regular basis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {techData.map((category) => (
            <div key={category.id} className="mb-12 last:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.name}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                {category.items.map((tech) => (
                  <TechIcon key={tech.id} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;