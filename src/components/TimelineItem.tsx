import { cn } from '../utils/cn';
import { TimelineItem as TimelineItemType } from '../types';

interface TimelineItemProps {
  item: TimelineItemType;
}

const TimelineItem = ({ item }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-2 group">
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full shadow group-hover:scale-110 transition-transform duration-200"></div>
      
      {/* Timeline line */}
      <div className="absolute left-2 top-3 bottom-0 w-[1px] bg-secondary-200 dark:bg-secondary-700 group-last:hidden"></div>

      {/* Content */}
      <div className={cn(
        "bg-white dark:bg-secondary-800 p-5 rounded-lg shadow-sm transition-all duration-300",
        "group-hover:shadow-md group-hover:-translate-y-1"
      )}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {item.period}
          </span>
        </div>
        <h5 className="text-base font-medium text-secondary-600 dark:text-secondary-300 mb-3">
          {item.organization}
        </h5>
        <ul className="list-disc list-inside text-secondary-600 dark:text-secondary-400 space-y-1">
          {item.description.map((desc, index) => (
            <li key={index} className="text-sm">{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;