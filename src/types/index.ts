export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
}

export interface TechItem {
  id: string;
  name: string;
  icon: string;
}

export interface TechCategory {
  id: string;
  name: string;
  items: TechItem[];
}

export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string[];
}