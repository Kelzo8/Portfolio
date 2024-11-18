import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { QuoteGenerator } from './QuoteGenerator';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="mb-8 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#06d2dd] to-[#0b112b] rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur"></div>
          <img
            src="/kelzo-logo.png"
            alt="Kelzo Coding"
            className="w-48 h-48 rounded-full mx-auto mb-6 relative border-4 border-background bg-background"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          James Kelly
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-8">
          Software Developer specialising in AI and Web Applications. Currently
          a second-year{' '}
          <a
            href="https://www.software-engineering.ie/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline decoration-2 decoration-primary/30 hover:decoration-primary"
          >
            Immersive Software Engineering (ISE)
          </a>{' '}
          student at the University of Limerick, on placement with Keeper
          Solutions.
        </p>

        <div className="max-w-2xl mx-auto space-y-6 text-lg">
          <p className="text-muted-foreground">
            Experienced in Java, Python, Django, Streamlit, and C++. Proficient
            with development tools like Docker and AWS for building scalable
            applications. My technical expertise spans machine learning, web development,
            and software engineering best practices.
          </p>
          
          <p className="text-muted-foreground">
            Outside of tech, I'm an avid sports enthusiast, particularly enjoying GAA and fitness. 
            Exploring these interests helps me bring a balanced, energetic approach to my work and studies. 
            Feel free to explore my projects, where I combine my technical skills and passion for problem-solving!
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-12 mb-12">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <a href="/assets/cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
        <QuoteGenerator />
      </div>
    </section>
  );
}