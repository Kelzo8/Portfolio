export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface Certificate {
  title: string;
  organization: string;
  image: string;
  description: string;
}