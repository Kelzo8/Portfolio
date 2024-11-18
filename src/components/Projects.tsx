import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Globe } from 'lucide-react';
import { projects } from '@/lib/data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Projects() {
  const [filter, setFilter] = useState<string>('all');
  
  const technologies = ['All', 'Python', 'AI', 'TypeScript', 'Docker', 'Machine Learning'];
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.technologies.some(tech => 
      tech.toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Featured Projects
        </h2>
        
        <div className="mb-8 max-w-xs mx-auto">
          <Select onValueChange={setFilter} defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Filter by technology" />
            </SelectTrigger>
            <SelectContent>
              {technologies.map((tech) => (
                <SelectItem key={tech.toLowerCase()} value={tech.toLowerCase()}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button asChild size="sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}