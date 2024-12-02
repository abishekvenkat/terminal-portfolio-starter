export interface BlogPost {
  id: string;
  title: string;
  createdAt: Date;
  content: string;
  filename: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  tech: string[];
}

export interface UserProfile {
  name: string;
  role: string;
  location: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Command {
  command: string;
  output: string | JSX.Element;
}