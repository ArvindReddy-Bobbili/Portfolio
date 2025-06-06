import { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: string;
  location: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Graduate Teaching Assistant",
    company: "University of Houston",
    period: "Aug 2024 – Present",
    type: "Part-time",
    location: "Houston, TX"
  },
  {
    title: "Software Engineer",
    company: "Openprise Technologies",
    period: "Dec 2022 – Jun 2023",
    type: "Full-time",
    location: "Hyderabad, India"
  },
  {
    title: "Associate Software Developer",
    company: "OpenText",
    period: "Jul 2021 – Dec 2022",
    type: "Full-time",
    location: "Hyderabad, India"
  },
  {
    title: "Frontend Developer Intern",
    company: "BingeIt",
    period: "May 2020 – Aug 2020",
    type: "Internship",
    location: "Remote"
  }
];

interface TechCategory {
  name: string;
  items: {
    name: string;
    logo: string;
  }[];
}

const techCategories: TechCategory[] = [
  {
    name: "Languages",
    items: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      }
    ]
  },
  {
    name: "Frontend",
    items: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      }
    ]
  },
  {
    name: "Backend",
    items: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      }
    ]
  },
  {
    name: "Tools & DevOps",
    items: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
      }
    ]
  }
];

const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-black transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-black dark:text-white">Experience and Tech Stack</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6",
                  "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                )}
              >
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{item.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.period} • {item.type} • {item.location}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Column */}
          <div className="space-y-8">
            {techCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {category.items.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={cn(
                        "group relative bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4",
                        "flex flex-col items-center justify-center",
                        "transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      )}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-sm text-center text-gray-700 dark:text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;