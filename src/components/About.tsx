import { useEffect, useRef } from 'react';
import { UserCircle } from 'lucide-react';
import { cn } from '../utils/cn';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 transition-all duration-700 opacity-0 translate-y-10 bg-secondary-50 dark:bg-secondary-800/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute -inset-4 rounded-lg bg-primary-600/10 dark:bg-primary-400/10"></div>
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Arvind Reddy Bobbili"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl font-semibold mb-4">Software Development Engineer</h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              I'm Arvind Reddy Bobbili, a passionate Software Engineer with expertise in full-stack development,
              specializing in building scalable web applications. I have a strong foundation in both frontend and
              backend technologies, with particular focus on React, Node.js, and cloud technologies.
            </p>
            <p className="text-secondary-600 dark:text-secondary-300 mb-8">
              My approach combines innovative problem-solving with robust architectural design to create efficient
              and maintainable solutions. I'm particularly interested in AI/ML integration, cloud computing, and
              building systems that scale. When I'm not coding, I enjoy exploring new technologies, contributing
              to open-source projects, and staying updated with the latest tech trends.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-secondary-600 dark:text-secondary-300">
                  <strong>Name:</strong> Arvind Reddy Bobbili
                </span>
              </div>
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-secondary-600 dark:text-secondary-300">
                  <strong>Email:</strong> arvindreddybobbili@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-secondary-600 dark:text-secondary-300">
                  <strong>From:</strong> New York, USA
                </span>
              </div>
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-secondary-600 dark:text-secondary-300">
                  <strong>Freelance:</strong> Available
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium",
                "bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600",
                "transition-colors duration-200 shadow-sm"
              )}
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;