import { useState } from 'react';
import { cn } from '../utils/cn';
import { TechItem } from '../types';

interface TechIconProps {
  tech: TechItem;
}

const TechIcon = ({ tech }: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "w-16 h-16 flex items-center justify-center bg-white dark:bg-secondary-800 rounded-lg shadow-sm mb-2",
        "transition-all duration-300",
        isHovered ? "shadow-md transform scale-110" : ""
      )}>
        <div
          className={cn(
            "w-12 h-12 flex items-center justify-center filter grayscale transition-all duration-300",
            isHovered ? "grayscale-0" : ""
          )}
          dangerouslySetInnerHTML={{ __html: tech.icon }}
        />
      </div>
      <span className={cn(
        "text-sm font-medium transition-colors duration-300",
        isHovered ? "text-primary-600 dark:text-primary-400" : "text-secondary-600 dark:text-secondary-300"
      )}>
        {tech.name}
      </span>

      {/* Tooltip */}
      <div className={cn(
        "absolute -mt-20 bg-white dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 py-1 px-3 rounded shadow-md",
        "transition-all duration-300",
        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="text-xs whitespace-nowrap">{tech.name}</div>
        <div className="absolute w-2 h-2 bg-white dark:bg-secondary-800 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default TechIcon;