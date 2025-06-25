import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../utils/cn';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Check if live URL is valid (not '#' or empty)
  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';

  return (
    <div
      className="group bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={project.image}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-primary-900/70 flex items-center justify-center gap-4 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          {/* Only show live demo button if valid URL exists */}
          {hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-primary-600 hover:bg-primary-50 transition-colors duration-200"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white text-primary-600 hover:bg-primary-50 transition-colors duration-200"
            aria-label="View source code"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-secondary-600 dark:text-secondary-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;