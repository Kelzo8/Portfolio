import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-foreground mb-8">
          Get In Touch
        </h2>
        <p className="text-center text-primary mb-12">
          Feel free to reach out through any of these channels!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
            <a href="mailto:james.kelly991@yahoo.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}