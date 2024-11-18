import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code2, Home, Mail, Menu, Moon, Sun, X, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from './theme-provider';

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
  { label: 'Projects', href: '#projects', icon: <Code2 className="w-5 h-5" /> },
  { label: 'Certificates', href: '#certificates', icon: <Award className="w-5 h-5" /> },
  { label: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary">
              Kelzo
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="flex items-center space-x-2"
                asChild
              >
                <a href={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}