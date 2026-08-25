export interface ProjectDetailTabs {
  overview: string;
  architecture: string;
  engineering: string;
  challenges: string;
  outcome: string;
}

export interface ProjectDiagramStage {
  id: string;
  name: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  diagram: ProjectDiagramStage[];
  detailTabs: ProjectDetailTabs;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: 'work' | 'academic' | 'project';
}

export interface TechCategory {
  id: string;
  title: string;
  skills: string[];
}
